import React from 'react' 
import {useDispatch} from 'react-redux'

let Card = (props) =>{
    const dispatch = useDispatch()
    var Properites = {type:'Push',name : props.name,price:props.price,brand:props.brand,img:props.img}
    let Print =  (event) =>{
        dispatch(event)
        document.getElementById('ProductDisplay').style.display = 'flex'
        }
    return (
        <div id = 'Card' className = {Properites} onClick = {()=>{Print(Properites)}}>
        <img  src = {props.img}/>
        <h4 id = 'Cardbrand'  >{props.brand}</h4>
        <h2 id = 'CardName' >{props.name}</h2>
        <h2 id = "CardPrice" >Price - ${props.price}</h2>
        </div>
    )
}
export default Card