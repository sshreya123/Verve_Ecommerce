import React ,{useContext} from 'react'
import './css/Product.css'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import Productdisplay from '../Components/ProductDisplay/Productdisplay'
import DescriptionBox from '../Components/DiscriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams()
    const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
    <Breadcrum product={product}/>
    <Productdisplay product ={product}/>
    <DescriptionBox />
    <RelatedProducts/>

      
    </div>
  )
}

export default Product
