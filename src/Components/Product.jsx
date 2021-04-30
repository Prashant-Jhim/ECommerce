import React,{useState} from 'react'  
import Card from './card'
import Button from '@material-ui/core/Button';
import Main from './Data'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'



let Product = () =>{
    let [price,Newprice] = useState(0)
    const [Brandarr,newbrand] = useState([])
    const initial = {type:'Push',name:'',brand:'',price:'',img:''}
    const Data = useSelector((state)=>{return state.display})
    const Qunt = useSelector((state)=>{return state.quantity})
    const dispatch = useDispatch()
    const [Prev,New] =useState('')
    const Items = {name:Data.name,price:Data.price,Quantity:Qunt.Count}
    let Close1 = () =>{
        document.getElementById('Link1').style.display = 'none'
    }
    let BuyItems = () =>{
    const Cont = {type:'Buy',arr:Items,amount:parseInt(Data.price*Qunt.Count)}
    const Change = {type:'Add',Count:1}
    dispatch(Cont)
    dispatch(Change)

    }
    
    let ChangeInPrice = (event) =>{
        var button = event.target.id
        var name = event.target.id.toLowerCase()
        if (document.getElementById(button).innerHTML == 'X'){
            document.getElementById(name).style.height = '40px' 
        }
        if (document.getElementById(button).innerHTML != 'X'){
            document.getElementById(name).style.height = '150px'
            document.getElementById(button).innerHTML = 'X'
            New(button)
        }
        if (document.getElementById(name).style.height == '40px'){
            document.getElementById(button).innerHTML = Prev
        }       
    }
    let Close = () =>{
        document.getElementById('ProductDisplay').style.display = 'none'
        document.getElementById('Quantity').value = 1
        dispatch(initial)
        
    }
    let ChangeInPrice2 = (event) =>{
        var button = event.target.id
        var name = event.target.id.toLowerCase()
        if (document.getElementById(button).innerHTML == 'X'){
            document.getElementById(name).style.height = '40px' 
        }
        if (document.getElementById(button).innerHTML != 'X'){
            document.getElementById(name).style.height = '150px'
            document.getElementById(button).innerHTML = 'X'
            New(button)
        }
        if (document.getElementById(name).style.height == '40px'){
            document.getElementById(button).innerHTML = Prev
        }       
    }
    const [Arr,SetArr] = useState([...Main])
    let print = (arr) =>{
        return(
            <Card name = {arr.name} brand = {arr.brand} price = {arr.price} img = {arr.img}/>
        )
    }
    let Filter = () =>{
        const Prices = []
        const brands = []
        var New = []
        for (let i = 1 ; i <= 3 ; i++ ){
            var Ans = document.getElementById(`PriceChecked${i}`).checked
            if (Ans != false){
              var values =   document.getElementById(`PriceChecked${i}`).value 
              Prices.push(parseInt(values))
            }
        }
        var RealPrice = Math.max(...Prices)
        for (let i = 1 ; i <= 3 ; i++ ){
            var Ans = document.getElementById(`BrandChecked${i}`).checked
            if (Ans != false){
              var values =   document.getElementById(`BrandChecked${i}`).value 
              brands.push(values)
            }
        }
        for (let i = 0 ; i < Main.length;i++){
            if (Prices.length != 0 && brands.length != 0 ){
                if (Main[i].price < RealPrice && brands.indexOf(Main[i].brand) != -1){
                    New.push(Main[i])
                }
            }
            if (Prices.length != 0 && brands.length == 0){
                if (Main[i].price < RealPrice){
                    New.push(Main[i])
                }
            }
            if (brands.length != 0 && Prices.length == 0){
                if (brands.indexOf(Main[i].brand) != -1){
                    New.push(Main[i])
                }
            }
            
        }
        if (New.length != 0){
            SetArr(New)
        }
        if (New.length == 0){
            SetArr(Main)
        }
        
        
    }
    let Filter2 = () =>{
        const Prices = []
        const brands = []
        var New = []
        for (let i = 1 ; i <= 3 ; i++ ){
            var Ans = document.getElementById(`PriceCheckeds${i}`).checked
            if (Ans != false){
              var values =   document.getElementById(`PriceCheckeds${i}`).value 
              Prices.push(parseInt(values))
            }
        }
        var RealPrice = Math.max(...Prices)
        for (let i = 1 ; i <= 3 ; i++ ){
            var Ans = document.getElementById(`BrandCheckeds${i}`).checked
            if (Ans != false){
              var values =   document.getElementById(`BrandCheckeds${i}`).value 
              brands.push(values)
            }
        }
        
        
        for (let i = 0 ; i < Main.length;i++){
            if (Prices.length != 0 && brands.length != 0 ){
                if (Main[i].price < RealPrice && brands.indexOf(Main[i].brand) != -1){
                    New.push(Main[i])
                }
            }
            if (Prices.length != 0 && brands.length == 0){
                if (Main[i].price < RealPrice){
                    New.push(Main[i])
                }
            }
            if (brands.length != 0 && Prices.length == 0){
                if (brands.indexOf(Main[i].brand) != -1){
                    New.push(Main[i])
                }
            }
            
        }
        if (New.length != 0){
            SetArr(New)
        }
        if (New.length == 0){
            SetArr(Main)
        }
        document.getElementById('Filter2').style.display = 'none'
        
        
    }
    let ShowFilter = () =>{
        document.getElementById('Filter2').style.display = 'flex'
    }
    return (
        <div id = 'Product'>
        <button id = 'FilterButton' onClick = {ShowFilter}>Filter</button>
        <div id = 'Filter'>
        <div id = 'price' >
        <button id = 'Price'  onClick = {ChangeInPrice}  title ='Double Click For Closing'>Price</button>
        <br/>
        <input id = 'PriceChecked1' type = 'checkbox' value = '1000' ></input><label> below $1000</label>
        <br/>
        <input id = 'PriceChecked2' type = 'checkbox'  value = '2000' ></input><label> below $2000</label>
        <br/>
        <input id = 'PriceChecked3' type = 'checkbox'  value = '3000' ></input><label> below $3000</label>
        </div>
        <div id = 'brand' className = 'Brand'>
        <button id = 'Brand' onClick = {ChangeInPrice}  title ='Double Click For Closing'>Brand</button>
        <br/>
        <input id = 'BrandChecked1' type = 'checkbox' value = 'Apple' ></input><label> Apple</label>
        <br/>
        <input id = 'BrandChecked2' type = 'checkbox' value = 'Samsung' ></input><label> Samsung</label>
        <br/>
        <input id = 'BrandChecked3' type = 'checkbox' value = 'Oneplus' ></input><label> OnePlus</label>
        </div>
        <div id = 'category'>
        <button id = 'Category' onClick = {ChangeInPrice} title ='Double Click For Closing'>Category</button>
        <br/>
        <input type = 'checkbox' value = 'Tv' ></input><label> Tv </label>
        <br/>
        <input type = 'checkbox' value = 'Mobile' ></input><label> Mobile</label>
        <br/>
        <input type = 'checkbox' value = 'Other'></input><label> Other</label>
        </div>
        <Button id = 'Apply' onClick = {Filter2}>Apply</Button>
        </div>
        <div id = 'Filter2'>
        <div id = 'prices' >
        <button id = 'Prices'  onClick = {ChangeInPrice2}  title ='Double Click For Closing'>Price</button>
        <br/>
        <input id = 'PriceCheckeds1' type = 'checkbox' value = '1000' ></input><label> below $1000</label>
        <br/>
        <input id = 'PriceCheckeds2' type = 'checkbox'  value = '2000' ></input><label> below $2000</label>
        <br/>
        <input id = 'PriceCheckeds3' type = 'checkbox'  value = '3000' ></input><label> below $3000</label>
        </div>
        <div id = 'brands' className = 'Brand'>
        <button id = 'Brands' onClick = {ChangeInPrice2}  title ='Double Click For Closing'>Brand</button>
        <br/>
        <input id = 'BrandCheckeds1' type = 'checkbox' value = 'Apple' ></input><label> Apple</label>
        <br/>
        <input id = 'BrandCheckeds2' type = 'checkbox' value = 'Samsung' ></input><label> Samsung</label>
        <br/>
        <input id = 'BrandCheckeds3' type = 'checkbox' value = 'Oneplus' ></input><label> OnePlus</label>
        </div>
        <div id = 'categorys'>
        <button id = 'Categorys' onClick = {ChangeInPrice2} title ='Double Click For Closing'>Category</button>
        <br/>
        <input type = 'checkbox' value = 'Tv' ></input><label> Tv </label>
        <br/>
        <input type = 'checkbox' value = 'Mobile' ></input><label> Mobile</label>
        <br/>
        <input type = 'checkbox' value = 'Other'></input><label> Other</label>
        </div>
        <Button id = 'Apply' onClick = {Filter2}>Apply</Button>
        </div>
        
        <div id = 'Show'>
       {Arr.map(print)}
        </div>
        <div id = 'ProductDisplay'>
        <img src = {Data.img}/>
        <div id = 'ProductDetails'>
        <button id ='Close' onClick = {Close}>X</button>
        <h1 id = 'HeadingOfProduct'>{Data.name}</h1>
        <h2 id = 'Price'>Price - ${Data.price}</h2>
        <label id = 'Title'>Quantity</label><input id = 'Quantity' type="number" name="quantity" min="1" max="600000" placeholder = '1' onChange ={(event)=>{dispatch({type:'Add',Count:event.target.value})}}></input>
        <ul>
        <li>6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display</li>
        <li>Water and dust resistant (2 meters for up to 30 minutes, IP68)</li>
        <li>Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps</li>
        <li>12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo</li>
        <li>Face ID for secure authentication</li>
        <li>Fast-charge capable</li>
        </ul>
        <Button id = 'Buy' onClick = {()=>{BuyItems()}}>Buy</Button>
        </div>
        </div>
        <div id = 'Link1'>
        <button id = 'CloseButton' onClick = {Close1}>X</button>
        <Link id = 'Part1' to = '/' onClick = {Close1}>Home</Link>
        <Link  id = 'Part2'  to = '/Product' onClick = {Close1}>Products</Link>
        <Link  id = 'Part3' to = '/Contact' onClick = {Close1}>Contact</Link>
        </div>
        </div>
    )
}
export default Product
