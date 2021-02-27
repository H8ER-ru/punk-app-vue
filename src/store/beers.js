import axios from "@/services/axios";
import mutations from "@/store/mutations";

const {BEERS_LIST, CURRENT_PAGE} = mutations

const beerStore ={
    namespaced: true,
    state:{
        beersList: null,
        currentPage: 1,
        beerPerPage: 15
    },
    getters:{
        beersList: ({beersList}) => beersList,
        currentPage: ({currentPage}) => currentPage,
        beerPerPage: ({beerPerPage}) => beerPerPage,
        beerLength : () => 100
    },
    actions:{
        async fetchBeer({getters, commit}){
            const {currentPage, beerPerPage} = getters
            const response = await axios.get(`/beers?page=${currentPage}&per_page=${beerPerPage}`
            )
            console.log(response.data)
            console.log(response)
            commit(BEERS_LIST, response.data)
        },
        changeCurrentPage({commit, dispatch}, page){
            commit(CURRENT_PAGE, page)
            dispatch("fetchBeer")
        }
    },
    mutations:{
        [BEERS_LIST](state, value){
            state.beersList = value
        },
        [CURRENT_PAGE](state, value){
            state.currentPage = value
        }
    }
}
export default beerStore