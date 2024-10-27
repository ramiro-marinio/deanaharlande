'use client';
import { Attribute, OrderAttribute } from '@/types/product'
import React, { useState } from 'react'

export default function AttributePicker({attribute,onChange}:{attribute:OrderAttribute,onChange:(id:number,value:number)=>void}) {
  const [position,setPosition] = useState(attribute.position)
  return (
    <div className='flex flex-row items-center gap-2 mb-2'>
        <p className='font-bold text-lg'>
            {attribute.name}:
        </p>
        {attribute.options.map((option,index)=>{
    return <p onClick={()=>{
        console.log(`index is ${index}`)
        onChange(attribute.id,index)
        setPosition(index)
    }
    } className={`p-2 hover:cursor-pointer min-w-14 select-none text-center rounded-[20px] border-[1px] 
    border-[rgba(0,0,0,0.5)] dark:border-[rgba(255,255,255,0.5)] ${position == index ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>{option}</p>
        })}
    </div>
  )
}
