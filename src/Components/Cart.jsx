import React,{useState} from 'react' 
import {useSelector,useDispatch} from 'react-redux' 
import Button from '@material-ui/core/Button';
import CartDetails from './CartDetails'
import {Link} from 'react-router-dom'

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
    let Close = () =>{
        document.getElementById('Link1').style.display = 'none'
    }
    return(
        <div id = 'Cart'>
        <Button id = 'Clear' onClick ={()=>{Clear()}}>Clear</Button>
        <h2 id = 'TotalAmount'>Total Amount = ${Data} </h2>
        <div id = 'ShowCart'>
        <CartDetails name = 'Name' quantity = 'Quantity' price = 'Price'/>
        {Details.map(print)}

        </div>
        <div id = 'Link1'>
        <button id = 'CloseButton' onClick = {Close}>X</button>
        <Link id = 'Part1' to = '/' onClick = {Close}>Home</Link>
        <Link  id = 'Part2'  to = '/Product' onClick = {Close}>Products</Link>
        <Link  id = 'Part3' to = '/Contact' onClick = {Close}>Contact</Link>
        </div>
        
        </div>
    )
}
export default Cart