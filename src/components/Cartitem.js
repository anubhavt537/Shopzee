import React, { useContext } from 'react'
import './Cartitem.css'
import ShopContext from '../Context/ShopContext'
import remove_icon from './/Assets/cart_cross_icon.png'
export default function Cartitem() {
    const {items,cartItems,removeToCart}=useContext(ShopContext)
  return (
    <div className='cartitem'>
        <div className="cartitem-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>price</p>
            <p>Qauntity</p>
            <p>total</p>
            <p>Remove</p>
        </div>
        <hr />
      {items.map((e)=>{
        if (cartItems[e.id]>0) {
            return <div>
            <div className="cartitem-format cartitem-format-main">
                <img src={e.image} alt="" className='cart-product-icon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                <p>{e.new_price*cartItems[e.id]}</p>
                <img className='cart-remove-icon' src={remove_icon} onClick={()=>{removeToCart(e.id)}} alt="" />
            </div>
            <hr />
            </div> 
        }
        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
            <h1>Total cart</h1>
            <div>
            <div className="cartitem-total-item">
<p>SubTotal</p>
<p>${0}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
                <h3>Total</h3>
                <p>${0}</p>
            </div>
            </div>
            <button>Proceed To Checkout</button>
        </div>
        <div className="cartitem-promocode">
                <p>If you have promocode enter here</p>
                <div className="cartitem-promobox">
                    <input type="text" placeholder='...Promocode' />
                    <button>Submit</button>
                </div>
    </div>
      </div>
    </div>
  )
}
