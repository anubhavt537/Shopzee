import React, {  useContext } from 'react'
import './ShopCategory.css'
import  ShopContext  from '../Context/ShopContext'
import dropdown_icon from './Assets/dropdown_icon.png'
import Item from './Item'


  
  
  
  const ShopCategory=(props)=>{
    const {items}=useContext(ShopContext)
    
  return (
    <div className="shop-category">
<img className="shop-category-banner" src={props.banner} alt="" />
<div className="shopcategory-indexSort">
  <p>
    <span>Showing 1-12</span> Out pf 36 Product
  </p>
  <div className="shop-category-sort">
    Sort by <img src={dropdown_icon} alt="" />
  </div>
</div>




<div className="shopcategory-product">
{items.map((item,i)=>{
if(props.category===item.category){
  return <Item key={i} id={item.id} name={item.name}  img={item.image} new_price={item.new_price} old_price={item.old_price}/>
}
else{
  return null;
}
  
  



  })}
</div>
<div className="shopcategory-loadmore">
  Explore More
</div>
    </div>
  )

}

export default ShopCategory