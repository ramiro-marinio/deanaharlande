'use client';
import BalancedImage from '@/components/image/balanced_image';
import { Product } from '@/types/product';
import React, { useState } from 'react'

export default function ImageViewer({product}:{product:Product}) {
  const [currentImage,setImage] = useState(0);
  return (
        <div className='px-10'>
            <BalancedImage width={'100%'} aspectRatio={'1/1'} src={product.images[currentImage].src}/>
            <div className='w-full flex items-center justify-center'>
                {
                    product.images.map((image,index)=>{
                        return (
                            <div key={image.id} onClick={()=>{
                                setImage(index);
                            }} className='flex-1 max-w-20 p-[2px] hover:cursor-pointer flex flex-col items-center'>
                                <BalancedImage width={'100%'} aspectRatio={'1/1'} src={image.src}/>
                                <div className={`${currentImage == index ? 'w-full' : 'w-0'} h-[2px] bg-black dark:bg-white mt-[3px] transition-all`}/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
  )
}
