import axios from "@/services/axios";
import mutations from "@/store/mutations";

const {BEERS_LIST, CURRENT_PAGE, RANDOM_BEER, ADD_BASKET, DELETE_BASKET, DETAIL_BEER_ID, DETAIL_BEER_ITEM} = mutations

const beerStore ={
    namespaced: true,
    state:{
        detailBeerId: null,
        detailBeerItem: null,
        beersList: null,
        currentPage: 1,
        beerPerPage: 15,
        randomBeer: null,
        basketList: [],
        beerLength: 325
    },
    getters:{
        detailBeerId: ({detailBeerId}) => detailBeerId,
        detailBeerItem: ({detailBeerItem}) => detailBeerItem,
        randomBeer: ({randomBeer}) => randomBeer,
        beersList: ({beersList}) => beersList,
        currentPage: ({currentPage}) => currentPage,
        beerPerPage: ({beerPerPage}) => beerPerPage,
        beerLength : ({beerLength}) => beerLength,
        basketList: ({basketsList}) => basketsList
    },
    actions:{
        async fetchBeerDetail({commit, dispatch, getters}){
            try {
                dispatch('toggleLoader', true, {root: true})
                const {detailBeerId} = getters
                const response = await axios.get(`/beers/${detailBeerId}`)
                commit(DETAIL_BEER_ITEM, ...response.data)
            }catch (e) {
                console.log(e)
            }finally {
                dispatch('toggleLoader', false, {root: true})
            }
        },
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
        clearRandomBeer({commit}){
          commit(RANDOM_BEER, null)
        },
        clearDetailBeer({commit}){
            commit(DETAIL_BEER_ID, null)
            commit(DETAIL_BEER_ITEM, null)
        },
        changeDetailBeerId({commit},id){
            commit(DETAIL_BEER_ID, id)
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
        [DETAIL_BEER_ID](state, value){
            state.detailBeerId = value
        },
        [DETAIL_BEER_ITEM](state, value){
            state.detailBeerItem = value
        },
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
