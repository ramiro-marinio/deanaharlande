import React from 'react'

export default function BalancedImage({src,width,height,aspectRatio,children,className}:{src:string,
    height?:string|number,width?:string|number,
    aspectRatio?:string|number,children?:React.JSX.Element|string,className?:string}) {
  return (
    <div className={className} style={{width:width,height:height,aspectRatio:aspectRatio,backgroundImage:`url('${src}')`,backgroundSize:'cover',backgroundPosition:'center',backgroundColor:'black'}}>
        {children}
    </div>
  )
}
