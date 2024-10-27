import React, { SVGProps } from 'react'

export default function DrawerButton() {
  return (
    <div className='mr-3'>
        <i className='ph-list text-black dark:text-white text-3xl'/>
    </div>
  )
}


export function PhList(props: SVGProps<SVGSVGElement>) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="#00000 dark:#FFFFF" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"></path></svg>
    )
  }