import React from 'react' 
import Button from '@material-ui/core/Button';
let Home = () =>{
    let Clicked = () =>{
        document.getElementById('NewElement').click()
    }
    var Src = 'https://imgproxy-ouch.icons8.com/cDnCxpQlyMKe6Sq02sEjjOLuSu4C0zscGRwigicP4yw/rs:fit:912:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNTcw/LzI2NDBkNzEyLTRl/MDQtNDE0Ni05MWE3/LWE1ZWM2MDUzMmYx/OS5zdmc.png/download?filename=marginalia-online-shopping.png'
    return (
        <div id = 'home'>
        <div id = 'welcome'>
        <h2 id = 'firstText'>Welcome To My</h2>
        <h2 id = 'SecondText'>E-Commerce</h2>
        <h2 id = 'ThirdText'>Website</h2>
        
        <Button onClick ={Clicked}>Shop Now</Button>
        </div>
        <img src = {Src} alt = ''/>
        </div>
    )
}
export default Home 