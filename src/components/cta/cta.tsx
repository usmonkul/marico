import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Headings from '../headings/headings'
import Logo from '/public/assets/Logo.svg'
import Image from 'next/image'

const CTA = () => {
    return (
        <section className='container flex flex-col justify-center items-center py-20 md:py-28'>
            <Image className='w-24 h-auto md:w-[135px] lg:w-[165px] lg:h-[154px] 2xl:w-auto 2xl:h-auto mb-10' src={Logo} alt='Marico logo' />
            <div className='flex flex-col items-center'>
                <Headings variant='hb-l' text='Get Started Now' />
                <p className="text-lg md:text-3xl lg:text-4xl font-normal text-center mt-3 md:mt-5 mb-6">
                    Setup is easy and taken under 5 minutes.
                </p>
                <Link className="flex items-center gap-10 mb-4" href={'#'}>
                    <Button size={'lg'} className='md:py-7 md:px-14 font-semibold text-xl'>Get Started Now</Button>
                </Link>
                <div className="flex items-center md:text-2xl text-center justify-center font-bold">
                    <div className="h-4 w-4 bg-green-300 rounded-full flex items-center justify-center mr-2">
                        <div className="h-3 w-3 bg-green-600 rounded-full"></div>
                    </div>
                    1000+ <span className="ml-2 text-text-content font-normal">creators have already started</span>
                </div>
            </div>

        </section>
    )
}

export default CTA