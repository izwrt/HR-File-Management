import React from 'react'

export default function LoginTextBox({placeholder,type,isTrue}) {
  console.log(isTrue);
  return (
    <input
  className={`rounded-2xl font-medium placeholder:font-normal h-14 px-4 focus:outline-none text-2xl bg-transparent border-[1px] ${
    isTrue ? 'border-gray-400' : 'border-red-400'
  }`}
  placeholder={placeholder}
  type={type}
/>

  )
}
