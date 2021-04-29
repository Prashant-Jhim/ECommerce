import {createStore,combineReducers} from 'redux'


let Initial = {name:'',price:"",brand:"",img:''}
let InitialPrice = {cost:0,arr:[],amount:0}
let Quant = {Count:1}
let Display = (state=Initial,action) =>{
    switch (action.type) {
        case 'Push':return{
            ...state,
            name:action.name,
            price:action.price,
            brand:action.brand,
            img:action.img
        }
        default:return state
           
    }
}
let Quantiy = (state=Quant,action) =>{
    switch (action.type) {
        case 'Add':return {
            ...state,
            Count:action.Count
        }
        default:return state 
            
    }
}
let Buy = (state=InitialPrice,action) =>{
    switch (action.type) {
        case 'Buy':return{
            ...state,
            cost:action.cost,
            arr:[...state.arr,action.arr],
            amount:state.amount + action.amount
        }
        case 'Clear' :return{
            ...state,
            amount:action.amount,
            arr : action.arr
        }
        default:return state       
    }
}
let All = combineReducers({
    display : Display,
    buy : Buy,
    quantity:Quantiy
})
let Store = createStore(All)
export default Store