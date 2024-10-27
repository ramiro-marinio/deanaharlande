import getMobile from '@/functions/detect_phone'
import React from 'react'
export default function Footer() {
  const mobile = getMobile();
  return (
    <footer className={`w-full ${!mobile ? 'h-[300px]' : ''} bg-black text-white flex flex-col items-center justify-between ${mobile ? 'p-1' : 'p-3'}`}>
        <div className='flex flex-col'>
            <div style={{height:40}}/>
            <div className={`flex gap-10 justify-center ${mobile ? 'flex-col' : 'flex-row'} p-3 w-full`}>
                <div className='flex flex-col m-1'>
                    <h1 className='font-bold'>Customer Service</h1>
                    <p>Contact Us</p>
                    <p>FAQ</p>
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-bold m-1'>Business</h1>
                    <p>About us</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-bold m-1'>Social Media</h1>
                    <div className='flex gap-1 text-3xl'>
                        <i className='ph-instagram-logo'/>
                        <i className='ph-tiktok-logo'/>
                        <i className='ph-facebook-logo'/>
                    </div>
                </div>
            </div>
        </div>
       <p className='font-extralight m-2'> © 2024 Deana Harlandé. Powered by Brikshya Solutions.</p>
    </footer>
  )
}
