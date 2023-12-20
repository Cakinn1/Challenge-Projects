import React from 'react'

export default function StrengthCalc() {
  return (
    <div className="bg-[#191820] flex justify-between items-center p-6 rounded-md">
    <h1 className="uppercase text-lg text-[#807c92] font-semibold">
      Strength
    </h1>
    <div className="flex gap-x-2">
      <div className="border-2 h-8 w-3"></div>
      <div className="border-2 h-8 w-3"></div>
      <div className="border-2 h-8 w-3"></div>
      <div className="border-2 h-8 w-3"></div>
    </div>
  </div>
  )
}
