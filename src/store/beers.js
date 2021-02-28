import axios from "@/services/axios";
import mutations from "@/store/mutations";

const {BEERS_LIST, CURRENT_PAGE, RANDOM_BEER} = mutations

const beerStore ={
    namespaced: true,
    state:{
        beersList: null,
        currentPage: 1,
        beerPerPage: 15,
        randomBeer: null,
        basketsList: [],
    },
    getters:{
        randomBeer: ({randomBeer}) => randomBeer,
        beersList: ({beersList}) => beersList,
        currentPage: ({currentPage}) => currentPage,
        beerPerPage: ({beerPerPage}) => beerPerPage,
        beerLength : () => 200,
        basketsList: ({basketsList}) => basketsList
    },
    actions:{
        async fetchBeer({getters, commit, dispatch}){
            try {
                dispatch('toggleLoader', true, {root: true})
                const {currentPage, beerPerPage} = getters
                const response = await axios.get(`/beers?page=${currentPage}&per_page=${beerPerPage}`)
                console.log(response.data)
                console.log(response)
                commit(BEERS_LIST, response.data)
            }catch (e){
                console.log(e)
            }finally {
                dispatch('toggleLoader', false, {root: true})
            }
        },
        changeCurrentPage({commit, dispatch}, page){
            commit(CURRENT_PAGE, page)
            dispatch("fetchBeer")
        },
        async fetchRandomBeer({commit, dispatch}){
            try {
                dispatch('toggleLoader', true, {root: true})
                const response = await axios.get('beers/random')
                commit(RANDOM_BEER, response.data[0])
            }catch (e) {
                console.log(e)
            }finally {
                dispatch('toggleLoader', false, {root: true})
            }
        },
    },
    mutations:{
        [BEERS_LIST](state, value){
            state.beersList = value
        },
        [CURRENT_PAGE](state, value){
            state.currentPage = value
        },
        [RANDOM_BEER](state, value){
            state.randomBeer = value
        }
    }
}
export default beerStore