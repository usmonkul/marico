import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Headings from '../headings/headings'
import Logo from '/public/assets/Logo.svg'
import Image from 'next/image'

const CTA = () => {
    return (
        <section className='container flex flex-col justify-center items-center py-28'>
            <Image className='w-[135px] h-[125px] lg:w-[165px] lg:h-[154px] mb-5' src={Logo} alt='Marico logo' />
            <div className='flex flex-col items-center'>
                <Headings variant='hb-l' text='Get Started Now' />
                <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-center mt-5 mb-4">
                    Setup is easy and taken under 5 minutes.
                </p>
                <Link className="flex items-center gap-10 mb-4" href={'#'}>
                    <Button size={'lg'} className='py-7 px-14 font-semibold text-xl'>Get Started Now</Button>
                </Link>
                <div className="flex items-center text-2xl text-center justify-center font-bold">
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