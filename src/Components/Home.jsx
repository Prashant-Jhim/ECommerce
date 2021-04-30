import React from 'react' 
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
let Home = () =>{
    let Clicked = () =>{
        document.getElementById('NewElement').click()
    }
    var Src = 'https://imgproxy-ouch.icons8.com/cDnCxpQlyMKe6Sq02sEjjOLuSu4C0zscGRwigicP4yw/rs:fit:912:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNTcw/LzI2NDBkNzEyLTRl/MDQtNDE0Ni05MWE3/LWE1ZWM2MDUzMmYx/OS5zdmc.png/download?filename=marginalia-online-shopping.png'
   let Close = () =>{
       document.getElementById('Link1').style.display = 'none'
   }
    return (
        <div id = 'home'>
        <div id = 'welcome'>
        <h2 id = 'firstText'>Welcome To My</h2>
        <h2 id = 'SecondText'>E-Commerce</h2>
        <h2 id = 'ThirdText'>Website</h2>
        
        <Button onClick ={Clicked}>Shop Now</Button>
        </div>
        <img src = {Src} alt = ''/>
        <div id = 'Link1'>
        <button id = 'CloseButton' onClick = {Close}>X</button>
        <Link id = 'Part1' to = '/' onClick = {Close}>Home</Link>
        <Link  id = 'Part2'  to = '/Product' onClick = {Close}>Products</Link>
        <Link  id = 'Part3' to = '/Contact' onClick = {Close}>Contact</Link>
        </div>
        </div>
    )
}
export default Home 