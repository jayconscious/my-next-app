'use client'
import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
    { name: 'Performance', path: '/performance' },
    { name: 'Reliability', path: '/reliability' },
    { name: 'Scale', path: '/scale' }
];

export default function Header() {
    const pathname = usePathname();

    return (
        <div className="absolute w-full z-10">
            {/* 专门负责定位 */}
            <div className='flex justify-between container text-white mx-auto p-8 items-center'>
                <Link className="font-bold text-3xl" href='/'>Home</Link>
                <div className='flex gap-4 text-xl'>
                    {
                        routes.map((route) => (
                            <Link
                                key={route.path}
                                className={pathname === route.path ? 'text-purple-500' : ''}
                                href={route.path}
                            >
                                {route.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
