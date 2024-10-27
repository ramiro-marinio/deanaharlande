'use client';
import { Product } from '@/types/product'
import React, { useRef, useState } from 'react'
import BalancedImage from '../image/balanced_image'
import styles from './product_highlight.module.scss';
import { useDraggable } from 'react-use-draggable-scroll';
import Link from 'next/link';
export default function ProductHighlight({product,hide,blur}:{product:Product,hide?:boolean,blur?:boolean,}) {
  const [hover,setHover] = useState(false);
  blur ??= true;
  return (
    <Link href={`/category/${product.categories[0].slug}/${product.slug}`}>
      <div onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} className={`w-[300px] aspect-[9/12] select-none overflow-clip flex flex-col ${styles.productHighlight} ${hide ? styles.productHighlightHide : ''}`}>
          <div className='w-full h-[80%] overflow-clip'>
            <BalancedImage className={`${styles.productHighlightImage} ${hover ? styles.productHighlightImageHover : ''} ${hide && blur ? styles.productHighlightImageHide : ''}`} width={'100%'} height={'100%'} src={product.images[0].src}/>
          </div>
          <div className='relative w-full flex-grow'>
              <div className={`absolute w-full h-full flex items-center justify-center font-black text-2xl ${!hover ? styles.sideHide : ''} ${styles.translateTransition}`}>
                <p>VIEW MORE</p>
              </div>
              <div className={`${hover ? styles.sideHide : ''} ${styles.translateTransition} w-full h-full flex flex-col items-center justify-center`}>
                <h1 className='font-bold text-center underline'>{product.name}</h1>
                <h1 className='font-thin text-center text-lg text-gray-500'>{product.price} 
                  <span className='mx-1'>$</span></h1>
              </div>
          </div>
      </div>
    </Link>
  )
}
