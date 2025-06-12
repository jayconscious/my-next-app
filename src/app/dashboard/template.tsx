"use client"
import React, { useState } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)

  return (
    <div className='border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10'>
      <div className='flex justify-between'>
        <button className='bg-blue-500 text-white p-2 rounded-md' onClick={() => setCount(count + 1)}>increment</button>
        <p className='text-2xl'> template {count}</p>
        <button className='bg-red-500 text-white p-2 rounded-md' onClick={() => setCount(count - 1)}>decrement</button>
      </div>
      {children}
    </div>
  )
}
