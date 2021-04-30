import React,{useState} from 'react' 
import {Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import StoreMallDirectoryOutlinedIcon from '@material-ui/icons/StoreMallDirectoryOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
let Menu = () =>{
    const No =  useSelector(state => state.buy.arr.length)
    let Disp = () =>{
        document.getElementById('Link1').style.display = 'flex'
    }
    return(
        <div id = 'Menu'>
        <h1>Store</h1>
        <div id = 'Link'>
        <Link id = 'links' to = '/'>Home</Link>
        <Link  id = 'NewElement'  to = '/Product'>Products</Link>
        <Link  id = 'links' to = '/Contact'>Contact-Us</Link>
        <Link id = 'links' to = '/Cart'><ShoppingCartOutlinedIcon id = 'cart'/>{No}</Link>
        </div>
        
        <button id = 'menubutton' onClick = {Disp}>Menu</button>
        
        
        <Link id = 'link2' to = '/Cart'><ShoppingCartOutlinedIcon id = 'cart'/>{No}</Link>
        </div>
    )
}
export default Menu 