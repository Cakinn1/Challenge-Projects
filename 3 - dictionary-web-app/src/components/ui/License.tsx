import React from 'react'
import { MainProps } from '../../typings/interface'

export default function License({data}: MainProps) {
  return (
    <>
    
    {data && (
        <p className="text-sm text-opacity-50 pt-2">
          License: <a href={data.license.url}>{data.license.name}</a>
        </p>
      )}
      </>
  )
}
