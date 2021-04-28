import React from 'react' 
import {Route,Switch} from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Product from './Components/Product'
let MiddleStart = () =>{
    return(
        <div id = 'MiddleStart'>
        <Switch>
        <Route exact path = '/' component = {Home}></Route>
        <Route exact path = '/Contact' component = {Contact}></Route>
        <Route exact path = '/Product' component = {Product}></Route>
        </Switch>
        </div>
    )
}
export default MiddleStart