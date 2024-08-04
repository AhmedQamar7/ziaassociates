import { HERO } from '@/constants'
import React from 'react'
import SearchForm from './SearchForm'
import { Button } from './ui/button'
import Link from 'next/link'
import { ExternalLinkIcon, PhoneCallIcon } from 'lucide-react'

const Hero = () => {
  return (
    <div className="hero flex min-h-screen items-center justify-center">
      <div className="flex max-w-4xl flex-col pb-10 items-center gap-6">
        <div className="space-y-4 mt-16">
          <h1 className='m-4 text-center text-4xl text-white md:text-5xl lg:text-6xl '>
            {HERO.title}
          </h1>
          <p className='text-center p-4 text-slate-300'>
            {HERO.description}
          </p>
        </div>

        <SearchForm />

        <div className='hidden text-sm text-white gap-4 lg:flex'>

          <Link href={'https://www.zameen.com/agents/Karachi/Zia_Associates-191270/'} target='_blank'>
            <Button variant={'outline'} className='mr-2 bg-black duration-300'>
              zameen.com
              {/* <LuExternalLink /> */}
              <span className='pl-2'>
                <ExternalLinkIcon />
              </span>
            </Button>
          </Link>

            <Button variant={'outline'} className='mr-2 bg-black duration-300'>
              <PhoneCallIcon />
              <span className='pl-2'>
                +92 349-7009214
              </span>
            </Button>

        </div>
      </div>
    </div >
  )
}

export default Hero
