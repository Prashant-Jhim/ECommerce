import React,{useState} from 'react' 
import {Link } from 'react-router-dom'
import StoreMallDirectoryOutlinedIcon from '@material-ui/icons/StoreMallDirectoryOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
let Menu = () =>{
    const [No, setNo] = useState(0)
    return(
        <div id = 'Menu'>
        <h1>Store</h1>
        <div id = 'Link'>
        <Link id = 'links' to = '/'>Home</Link>
        <Link  id = 'links' to = '/Product'>Products</Link>
        <Link  id = 'links' to = '/Contact'>Contact-Us</Link>
        <Link id = 'links'><ShoppingCartOutlinedIcon id = 'cart'/>{No}</Link>
        </div>
        </div>
    )
}
export default Menu 