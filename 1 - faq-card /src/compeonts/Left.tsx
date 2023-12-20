import React from 'react'

export default function left() {
  return (
    <div  className='md:w-[50%] justify-center md:justify-normal h-full flex items-center md:pr-[96px] relative'>
      <img src="/images/bg-pattern-desktop.svg" className='h-[550px]  hidden md:flex left-0 w-[500px] absolute' alt="" />
      <img src="/images/illustration-woman-online-desktop.svg" className=' object-right  absolute md:static object-cover -top-[100px] h-[200px] md:h-[360px]' alt="" />
      <img src="/images/illustration-box-desktop.svg" className='absolute md:-left-[100px] md:top-[260px] hidden md:flex ' alt="" />
    </div>
  )
}

// style={{
  // backgroundImage: "url('/images/bg-pattern-desktop.svg'",
// }}