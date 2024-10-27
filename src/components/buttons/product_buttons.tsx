'use client';
import React from 'react'
import Button from './button';

export default function ProductButtons() {
  return (
    <div className='flex flex-row items-center justify-center w-full'>
        <Button onClick={()=>{}}>View</Button>
        <Button onClick={()=>{}} fill={false}>Add To Cart</Button>
    </div>
  )
}
