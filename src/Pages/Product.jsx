import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Descriptionbox from '../Components/DescriptionBox/Descriptionbox';
import RelatedProducts from '../Components/Relatedproducts/RelatedProducts';

const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();

  const product = all_product.find((e)=>e.id===Number(productId))//product id was string to convert we have used number function

  return (
    <div>
      <Breadcrums product = {product}/>
      <ProductDisplay product={product}/>
      <Descriptionbox />
      < RelatedProducts/>
    </div>
  )
}

export default Product