import React,{useState} from 'react' 
import {useSelector,useDispatch} from 'react-redux' 
import Button from '@material-ui/core/Button';
import CartDetails from './CartDetails'

let Cart = () =>{
    const dispatch = useDispatch()
    let Data = useSelector(state => state.buy.amount)
    Data = parseInt(Data)
    let Details = useSelector(state => state.buy.arr)
    const [Arr, setArr] = useState(Details)
    let print = (arr) =>{
        return (
            <CartDetails name = {arr.name} quantity = {arr.Quantity} price = {`$${arr.price}`}/>
        )
    }
    let Clear = () =>{
      var Neww = {type:'Clear',arr : [],amount:0}
      var Simple =   {name : 'Nothing', Quantity : 'Nothing',price:0}
      dispatch(Neww)

    }
    return(
        <div id = 'Cart'>
        <Button id = 'Clear' onClick ={()=>{Clear()}}>Clear</Button>
        <h2 id = 'TotalAmount'>Total Amount = ${Data} </h2>
        <div id = 'ShowCart'>
        <CartDetails name = 'Name' quantity = 'Quantity' price = 'Price'/>
        {Details.map(print)}

        </div>
        
        
        </div>
    )
}
export default Cart