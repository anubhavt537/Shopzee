import React, { useState } from "react";
import ShopContext from "./ShopContext";

import all_product from '../components/Assets/all_product'
const getDefaultCart =()=>{
    let cart ={};
    for(let index=0 ; index <all_product.length+1; index++){
    cart[index]=0;
    }
    return cart;
       }
const ShopState =(props)=>{
 
       const [cartItems ,SetCartItems]=useState(getDefaultCart());
    //    console.log(cartItems)

    const addToCart =(itemid)=>{
        SetCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        console.log(cartItems)
    }
    const removeToCart =(itemid)=>{
        SetCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }
    // const getTotalAmount =()=>{
    //     let totalAmount=0;
    //     for(const item in cartItems){
    //         if (cartItems[item]>0) {
    //             let itemInfo=all_product.find((product)=>product.id===Number(item))
    //             totalAmount +=itemInfo.new_price * cartItems[item];
    //         }
    //         return totalAmount;
    //     }
    // }
    
    return (
        <ShopContext.Provider value={{items :all_product ,cartItems,addToCart,removeToCart}}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopState;