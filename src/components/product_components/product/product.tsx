
import React from 'react'
import { Product } from '../../../types/product'
import getMobile from '../../../functions/detect_phone'
import Button from '../../buttons/button';
import ProductButtons from '../../buttons/product_buttons';
import Link from 'next/link';

export default function ProductDisplay({product}:{product:Product}) {
  const mobile = getMobile();
  const link = `/category/${product.categories[0].slug}/${product.slug}`
  return (
    <Link href={link}>
      <div className={`flex flex-col items-center ${mobile ? 'w-[300px]' : 'w-[300px]'}`}>
          <div className={`flex flex-col items-center w-full px-[1.5px]`}>
              <div className={`aspect-[9/10] bg-black bg-cover bg-center w-full`} style={{backgroundImage: product.images[0].src ? `url("${product.images[0].src}")` : `url("/placeholder.png")`}}/>
              <div className='w-full px-2'>
                <div className='h-[50px] flex justify-start items-center w-full'>
                  <h1 id='product-title' className='font-bold text-lg text-start w-full flex-grow underline'>
                      {product.name}
                  </h1>
                </div>
                <p id='price-and-currency' className='font-thin mb-2 w-full text-start'>
                  {Number.parseFloat(product.price)}
                  <span id='currency' className='ml-1'>
                    $
                  </span>
                </p>
              </div>
          </div>
      </div>
    </Link>
  )
}
