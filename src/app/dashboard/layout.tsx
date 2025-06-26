"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    name: 'about',
    pathname: '/dashboard/about'
  },
  {
    name: 'settings',
    pathname: '/dashboard/settings'
  }
]

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0)
  const pathname = usePathname()

  console.log(pathname)  // /dashboard/settings?sort=asc
  // 严格模式下，会执行两次，一次是客户端，一次是服务器
  // 所以需要使用 useEffect 来避免这个问题
  // useEffect(() => {
  //   console.log(pathname)
  // }, [pathname])

  return (
    <div className='border-2 border-dashed p-4 w-1/2 mx-auto mt-10'>
      <div className='flex gap-4 font-bold text-lg mb-4'>
        {
          links.map((link) => (
            <Link key={link.pathname} href={link.pathname} className={pathname === link.pathname ? 'text-purple-500' : ''}>{link.name}</Link>
          ))
        }
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
