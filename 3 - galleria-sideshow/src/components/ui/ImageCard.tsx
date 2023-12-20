import React from 'react'
import { ImageCardProps } from '../../typing/typings'

export default function ImageCard({artist, description, images, name, source, year}: ImageCardProps) {
  return (
        <figure className='gallery-item'>
            <img  className='w-[310px] ' src={images.gallery} alt="" />
        </figure>
  )
}
