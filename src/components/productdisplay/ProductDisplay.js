import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import ShopContext from '../../Context/ShopContext';
export default function ProductDisplay(props) {
    const {product} =props;
    const {addToCart}=useContext(ShopContext)
  return (

   <div className="productdisplay">
<div className="productdisplay-left">
    <div className="productdisplay-img-list">
    <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
    </div>
    <div className="productdsiplay-img"><img className='ProductDisplay-main-img' src={product.image} alt="" /></div>
</div>

{/* right */}
<div className="productdisplay-right">
<h1>{product.name}</h1>
<div className="productdisplay-right-star">
<img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
</div>
<div className="productdisplay-right-price">
<div className="productdisplay-right-old-prices"> ${product.old_price}</div>
<div className="productdisplay-right-new-prices">${product.new_price}</div>
</div>
<div className="ProductDisplay-right-prices-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ea ad beatae quas delectus vitae voluptatibus dolore repellendus
            </div>
            <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
            </div>
            </div>

            <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
        <p className='ProductDisplay-right-category'><span>category:</span>Women,T-shirt</p>
        <p className='ProductDisplay-right-category'><span>Tags:</span>Modern,Latest</p>
</div>






   </div>
   
  )
}
