'use client';
import Button from '@/components/buttons/button';
import { OrderAttribute, Product, ProductOrder } from '@/types/product';
import React, { useEffect, useRef, useState } from 'react'
import Divider from './components/divider';
import { Label } from './label';
import AttributePicker from './attribute';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

export default function ProductDetails({product}:{product:Product}) {
    let orderAttributes= useRef<OrderAttribute[]>(product.attributes);
    function modifyAttribute(id:number,value:number){
      let newAttributes = orderAttributes.current;
      newAttributes[newAttributes.findIndex((e)=>e.id == id)].position = value;
      orderAttributes.current = newAttributes;
    }
  
    let cart = useRef<ProductOrder[]>([]);
    const [inCart,setInCart] = useState(false);
    useEffect(()=>{
      cart.current = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []
      setInCart(!!cart.current.find((e)=>e.id == product.id))
    },[])
    const addToCart = ()=>{
      const newCart = cart.current.concat(
          {
              count:1,
              id:product.id,
              name:product.name,
              slug:product.slug,
              attributes:[],
          }
      );
      localStorage.setItem('cart',JSON.stringify(newCart));
      setInCart(true);
    };
    const removeFromCart = ()=>{
      let newCart:ProductOrder[] = [];
      cart.current.forEach((item)=>{
          if(item.id != product.id){
              newCart.push({
                  count:1,
                  id:product.id,
                  name:product.name,
                  slug:product.slug,
                  attributes:[],
              });
          }
      })
      cart.current = newCart;
      localStorage.setItem('cart',JSON.stringify(newCart))
      setInCart(false);
    };
    const toggleCart = ()=>{
      inCart ? removeFromCart() : addToCart();
    }
    return (
        <>
            <h1 className='font-bold text-3xl'>{[product.name.toUpperCase()]}</h1>
            <Divider/>
            <Label>Info</Label>
            {product.short_description}
            <Divider/>
            <Label>Attributes</Label>
            {orderAttributes.current.map((attribute)=>{
                return <AttributePicker onChange={modifyAttribute} attribute={attribute}/>
            })}
            {
                product.details ?
                <>
                    <Divider/>
                    <Label>Details</Label>
                    <ul className='list-disc ml-5'>
                        {product.details!.map((detail)=><li key={detail.slug}>{detail.name}: {detail.note}</li>)}
                    </ul>
                </>
                : <></>
            }
            <Divider/>
            <div className='mt-2 flex flex-col items-center w-full'>
                <Button fill={!inCart} onClick={()=>{
                    toggleCart();
                }}>
                    {!inCart ? 'add to cart' : 'added to cart'}
                </Button>
                <div className='w-full h-[100px]'>
                    <PayPalScriptProvider options={{clientId:'AazJYXAc6XB32ftk0UEHKvMT-VYoHMvYb4SnuBbDFIXQpuXzT55IvMVt__-lVNiqb8ij7_HQDR_jWOBT'}}>
                        <PayPalButtons  style={{color:'blue'}}/>
                    </PayPalScriptProvider>
                </div>
            </div>
        </>
    )
}
