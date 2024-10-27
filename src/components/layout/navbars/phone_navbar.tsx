'use client';
import React, { useEffect, useState } from 'react'
import ShoppingCart from '../../buttons/shopping_cart'
import DrawerButton from '../../buttons/drawer_button'
import { getDarkMode } from '@/functions/dark_mode';

export default function PhoneNavbar() {
  const [darkMode,setDarkMode] = useState(false);
  useEffect(()=>{
    setDarkMode(getDarkMode());
  },[])
  return (
    <div className="w-full h-[100px] flex items-center justify-between border-b-[1px] border-black p-3 dark:border-white">
          <div className="flex items-center">
            <DrawerButton/>
            <img width={60} src={`${darkMode ? '/logo_dark.webp' : '/logo_light.webp'}`}/>
          </div>
          <ShoppingCart/>
    </div>
  )
}
