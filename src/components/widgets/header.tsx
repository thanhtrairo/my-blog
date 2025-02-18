import { House } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { ThemeSwitch } from './theme-switch'

const socials = [
  {
    href: 'https://github.com/thanhtrairo',
    imageUrl: '/github.webp',
  },
  {
    href: 'https://www.linkedin.com/in/nguy%E1%BB%85n-ti%E1%BA%BFn-th%C3%A0nh-a66287266',
    imageUrl: '/linkedin.webp',
  },
  {
    href: 'https://me.thanhtrairo.io.vn/',
    imageUrl: '/me.webp',
  },
]

export const Header = () => {
  return (
    <header className="flex h-24 items-center justify-between">
      <div className="flex items-center gap-2 max-md:hidden">
        {socials.map((social) => (
          <Link key={social.href} href={social.href} target="_blank" className="bg-white">
            <Image src={social.imageUrl} alt="github" width={24} height={24} />
          </Link>
        ))}
      </div>
      <div className="text-center text-2xl font-bold sm:text-3xl xl:text-4xl">
        <Link href="/" className="flex items-center gap-2">
          <House className="stroke-[2.4]" />
          thanhtrairo
        </Link>
      </div>
      <ThemeSwitch />
    </header>
  )
}
