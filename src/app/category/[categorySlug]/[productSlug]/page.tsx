import React, { useEffect, useRef, useState } from 'react'
import productsJson from '@/json/products.json';
import { OrderAttribute, Product, ProductOrder } from '@/types/product';
import Divider from './components/divider';
import { Label } from './label';
import AttributePicker from './attribute';
import ImageViewer from './ImageViewer';
import Button from '@/components/buttons/button';
import getMobile from '@/functions/detect_phone';
import ProductDetails from './ProductDetails';
export default function ProductView({params}:{params:{productSlug:string}}) {
  const product = (productsJson as Product[]).find((product)=>product.slug == params.productSlug)!;
  

  const mobile = getMobile();
  return (
    <div className={`w-full min-h-[100vh] flex ${mobile ? 'flex-col' : 'flex-row'}`}>
        <div className={`p-3 ${!mobile ? 'flex-[3]' : ''}`}>
            <ProductDetails product={product}/>
        </div>
        <div className={`${!mobile ? 'flex-[2]' : ''}`}>
            <ImageViewer product={product}/>
        </div>
    </div>
  )
}

