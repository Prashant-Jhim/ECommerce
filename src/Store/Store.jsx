import {createStore} from 'redux'


let Initial = {name:'',price:"",brand:"",img:''}

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
let Store = createStore(Display)
export default Store