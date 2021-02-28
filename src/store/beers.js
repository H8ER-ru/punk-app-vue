import axios from "@/services/axios";
import mutations from "@/store/mutations";

const {BEERS_LIST, CURRENT_PAGE, RANDOM_BEER, ADD_BASKET, DELETE_BASKET} = mutations

const beerStore ={
    namespaced: true,
    state:{
        beersList: null,
        currentPage: 1,
        beerPerPage: 15,
        randomBeer: null,
        basketList: [],
    },
    getters:{
        randomBeer: ({randomBeer}) => randomBeer,
        beersList: ({beersList}) => beersList,
        currentPage: ({currentPage}) => currentPage,
        beerPerPage: ({beerPerPage}) => beerPerPage,
        beerLength : () => 200,
        basketList: ({basketsList}) => basketsList
    },
    actions:{
        async fetchBeer({getters, commit, dispatch}){
            try {
                dispatch('toggleLoader', true, {root: true})
                const {currentPage, beerPerPage} = getters
                const response = await axios.get(`/beers?page=${currentPage}&per_page=${beerPerPage}`)
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
        addBasket({commit}, beer){
            commit(ADD_BASKET, beer)
        },
        deleteBasket({commit}, beer){
            commit(DELETE_BASKET, beer)
        }
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
        },
        [ADD_BASKET](state, value){
            let item = state.basketList.find(currentValue => currentValue.id === value.id)
            if(item){
                state.basketList[state.basketList.indexOf(item)].count+=1
            }else{
                state.basketList.push(value)
                value.count = 1
            }

        },
        [DELETE_BASKET](state, value){
            function removeElementById(arr, value){
                return arr.filter(element => element.id !== value)
            }
            state.basketList =  removeElementById(state.basketList, value.id)
        }
    }
}
export default beerStore