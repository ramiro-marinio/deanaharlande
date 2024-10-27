import getMobile, { isMobile } from '@/functions/detect_phone'
import React from 'react'
import Image from 'next/image'
import BalancedImage from '@/components/image/balanced_image';
import ShopNow from '@/components/index/shop_now';
import HighlightedProducts from '@/components/product_components/highlighted_products/highlighted_products';
import { getAllProducts } from '@/functions/get_all_products';
export default function HomePage() {
  const mobile = getMobile();
  let products = getAllProducts();
  return (
    <div className='flex flex-col w-full'>
        <div className='w-full'>
            <BalancedImage width={'100%'} aspectRatio={mobile ? '6.5/9' : '16/6'} src='/category/fall-winter-collection-24/cover.jpg'>
                <div className='w-full text-white h-full flex flex-col items-center justify-center'>
                    <h1 className={`font-black text-center ${!mobile ? 'text-5xl' : 'text-2xl'}`}>NEW FALL/WINTER COLLECTION</h1>
                    <ShopNow/>
                </div>
            </BalancedImage>
        </div>
        <h1 className='font-black ml-10 mt-4 text-4xl'>LATEST RELEASES</h1>
        <HighlightedProducts products={[products[0],products[1],products[2]]}/>
    </div>
  )
}




