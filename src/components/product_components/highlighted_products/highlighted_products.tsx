'use client';
import { Product } from '@/types/product'
import React, { useRef, useState } from 'react'
import ProductHighlight from '../../product_highlight/product_highlight'
import { useDraggable } from 'react-use-draggable-scroll';
import styles from './highlighted_products.module.scss';
export default function HighlightedProducts({products,blurImages}:{products:Product[],blurImages?:boolean}) {
  const [highlightedProduct,setHighlightedProduct] = useState<number|null>(null);
  blurImages = blurImages ?? true;
  return (
    <div className={`flex flex-row flex-wrap justify-center gap-5 w-full p-5`}>
        {products.map((product)=>
            <div key={product.id} className='w-fit h-fit' onMouseOver={()=>{setHighlightedProduct(product.id)}} onMouseOut={()=>{setHighlightedProduct(null)}}>
                <ProductHighlight blur={blurImages} hide={highlightedProduct != null && highlightedProduct != product.id} product={product}/>
            </div>
        )}
    </div>
  )
}
