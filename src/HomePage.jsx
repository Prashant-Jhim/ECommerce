import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Menu from './Menu'
import MiddleStart from './MiddleStart'

let HomePage = () =>{
    return (
        <React.Fragment>
        <BrowserRouter>
        <Menu/>
        <MiddleStart/>
        </BrowserRouter>
        </React.Fragment>
    )
}
export default HomePage