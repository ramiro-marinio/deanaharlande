import React from 'react'
import styles from './shop_now.module.scss';
import getMobile from '@/functions/detect_phone';
import Link from 'next/link';
export default function ShopNow() {
    const mobile = getMobile();
    return (
      <Link href={'/category/fall-winter-collection-24'}>
        <div className={`h- ${styles.shopNow} text-2xl select-none mt-5 font-black flex items-center justify-center bg-white text-black`}
        style={{width:mobile ? 200 : 225, height:(mobile ? 200 : 225)*(60/225)}}>
            <p className='text-center'>Shop Now</p>
        </div>
      </Link>
    )
  }