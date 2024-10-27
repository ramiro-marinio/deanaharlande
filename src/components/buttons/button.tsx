'use client';
import React from 'react'

export default function Button({fill,children,onClick}:{fill?:boolean,children:string, onClick:()=>void}) {
  fill ??= false;
  return (
    <div onClick={onClick} className={`p-3 w-full select-none cursor-pointer py-4 m-1 border-black dark:border-white ${fill ? 'bg-black text-white dark:bg-white dark:text-black' : ''} border-[1px] font-black flex-grow items-center text-center justify-center`}>
        {children.toUpperCase()}
    </div>
  )
}
