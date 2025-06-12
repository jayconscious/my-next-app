"use client"
import React, { useState } from 'react'
import Link from 'next/link'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0)

  return (
    <div className='border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10'>
      <div className='flex gap-4 font-bold text-lg mb-4 text-purple-500'>
        <Link href='/dashboard/about'>about</Link>
        <Link href='/dashboard/settings'>settings</Link>
      </div>
      <div className='flex justify-between'>
        <button className='bg-blue-500 text-white p-2 rounded-md' onClick={() => setCount(count + 1)}>increment</button>
        <p className='text-2xl'> layout {count}</p>
        <button className='bg-red-500 text-white p-2 rounded-md' onClick={() => setCount(count - 1)}>decrement</button>
      </div>
      {children}
    </div>
  );
}
