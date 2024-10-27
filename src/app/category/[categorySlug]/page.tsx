import HighlightedProducts from '@/components/product_components/highlighted_products/highlighted_products';
import { getAllProducts } from '@/functions/get_all_products';
import React from 'react'
import jsonCategories from '@/json/categories.json';
import { FullCategory } from '@/types/category';
import ProductDisplay from '@/components/product_components/product/product';
import ShopNow from '@/components/index/shop_now';
import BalancedImage from '@/components/image/balanced_image';
import getMobile from '@/functions/detect_phone';
export default function Category({params}:{params:{categorySlug:string}}) {
  const slug = params.categorySlug;
  const category = (jsonCategories as FullCategory[]).find((category)=>category.slug == slug)!;
  const products = getAllProducts().filter((product)=>product.categories.find((category)=>category.slug == slug) !== undefined)
  const highlightedProducts = products.filter((product)=>{
    return category.highlights?.includes(product.id);
  });
  const mobile = getMobile();
  return (
    <div className='flex flex-col w-full items-center'>
        <div className='w-full'>
            <BalancedImage width={'100%'} aspectRatio={mobile ? '6.5/9' : '16/4'} src={category.attributes['cover']}>
                <div className='w-full text-white h-full flex flex-col items-center justify-center'>
                    <h1 className='font-black text-5xl text-center'>{category.name.toUpperCase()}</h1>
                </div>
            </BalancedImage>
        </div>
        <HighlightedProducts products={highlightedProducts} blurImages/>
        <div className={`w-full flex  ${mobile ? 'flex-col items-center' : 'flex-row flex-wrap items-start justify-center'}`}>
            {products.map((product)=><ProductDisplay product={product}/>)}
        </div>
    </div>
  )
}
