import React from 'react'  
import Button from '@material-ui/core/Button';

let CartDetails = (props) =>{
    return (
        <div id = 'CardDetails' className = {props.name}>
        <h2 id = 'CartQuantity'>{props.quantity}</h2>
        <h2 id = 'CartName'>{props.name}</h2>
        <h2 id = 'CartPrice'>{props.price}<Button id = {props.name + ''+props.price}>X</Button></h2>
        </div>
    )
}
export default CartDetails