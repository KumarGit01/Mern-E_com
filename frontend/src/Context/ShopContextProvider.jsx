import React,{createContext, useEffect, useState} from "react";

export const ShopContext = createContext(null);

const getDefaultCart= ()=>{
    let cart = {};
    for(let index=0; index < 300 + 1 ; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [all_product,setAll_product] = useState([]);
const [cartItems,setCartItems]=useState(getDefaultCart())

useEffect(()=>{
fetch ('https://backend-server-2.onrender.com/allproducts')
.then((res)=>res.json())
.then((data)=>setAll_product(data))

if(localStorage.getItem('auth-token')){
    fetch('https://backend-server-2.onrender.com/getcart',{
        method:'POST',
        headers:{
            Accept:'application/form-data',
            'auth-token' : `${localStorage.getItem('auth-token')}`,
        'Content-Type' : 'application/json',
        },
        body:"",
    }).then((res)=>res.json()).then((data)=>setCartItems(data));
}
},[])

 const addToCart = (itemId)=>{
    setCartItems((prev)=> ({
        ...prev,[itemId]:prev[itemId] + 1 }))
if(localStorage.getItem('auth-token')){
fetch ('https://backend-server-2.onrender.com/addtocart',{
    method:'POST',
    headers:{
        Accept:'application/form-data',
        'auth-token':`${localStorage.getItem('auth-token')}`,
        'Content-Type':'application/json',
    },
    body:JSON.stringify({"itemID":itemId})
})
    .then((res)=>res.json())
    .then((data)=>console.log(data))
}
    }
 const removeFromCart = (itemId)=>{
    setCartItems((prev)=> ({
        ...prev,[itemId]:prev[itemId]- 1 }))

        if(localStorage.getItem('auth-token')){
            fetch ('https://backend-server-2.onrender.com/removefromcart',{
    method:'POST',
    headers:{
        Accept:'application/form-data',
        'auth-token':`${localStorage.getItem('auth-token')}`,
        'Content-Type':'application/json',
    },
    body:JSON.stringify({"itemID":itemId})
})
    .then((res)=>res.json())
    .then((data)=>console.log(data))
}
        }

 

 const getTotalCartAmount = ()=>{
    let totalAmount = 0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0){
            let itemInfo = all_product.find((product)=>product.id === Number(item))
     totalAmount += itemInfo.new_price * cartItems[item] ;
     console.log(totalAmount)
        }
    }
    return totalAmount;
}
const getTotalItems = ()=>{
    let total = 0 ;
    for(const item in cartItems){
if(cartItems[item] > 0){
total += cartItems[item]
}
    }
return total;
}
const details = {getTotalItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

return(
        <ShopContext.Provider value={details}>
       {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
