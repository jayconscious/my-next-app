import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface IProps {
    imgSrc?: string | StaticImageData;
    imgAlt?: string;
    title?: string;
}

export default function Hero(props: IProps) {
    const { imgSrc = '', imgAlt = '', title = '' } = props;
  return (
    <div className='h-screen relative'>
      <div className='absolute inset-0 -z-10'>
        <Image priority src={imgSrc} alt={imgAlt} fill style={{ objectFit: 'cover' }} />
        <div className='absolute inset-0 bg-gradient-to-r from-gray-900'></div>
      </div>
      <div className='flex items-center justify-center pt-48 '>
        <h1 className='text-white text-6xl'>{title}</h1>
      </div>
    </div>
  )
}
