import React from 'react'
import Hero from '@/components/hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '首页',
  description: 'Professional Cloud Hosting',
}

export default function Page() {
  return (
    <>
      <Hero imgSrc="/home.jpg" imgAlt="home" title="Professional Cloud Hosting" />
    </>
  )
}
