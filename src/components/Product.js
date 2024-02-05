import React, {  useContext } from 'react'
import  ShopContext  from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumb from './breadcrumbs/Breadcrumb'
import ProductDisplay from './productdisplay/ProductDisplay'
import DescriptionBox from './DescriptionBox/DescriptionBox'
import RelatedProduct from './RelatedProduct/RelatedProduct'
export default function Product() {
  const {items}=useContext(ShopContext)
  const {ProductId}=useParams()
  const product =items.find((e)=>e.id===Number(ProductId))
  return (
    <div>
      <Breadcrumb product={product}/>
      <ProductDisplay  product={product} />
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}
