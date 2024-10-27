import { Product } from '@/types/product';
import jsonProducts from '../json/products.json';
export const getAllProducts = ()=>{
    return (jsonProducts as Product[]).sort((a,b)=>(new Date(a.date_created).getMilliseconds() > new Date(b.date_created).getMilliseconds()) ? 1 : 0);
}