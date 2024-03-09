import React from 'react'
import Headings from '../headings/headings'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import phoneImage from '/public/assets/Mobile.png'

const Step2 = () => {
    return (
        <section className='h-screen py-10 container flex flex-col items-center justify-center'>
            <div className="flex flex-col items-center md:mb-14 lg:mb-18">
                <span className="text-lg font-semibold text-light-blue uppercase mb-2">Step 2</span>
                <Headings variant='hs' text='Share Your Homepage' />
                <p className="text-text-content text-2xl mt-1 mb-8 max-w-[640px] text-center text-pretty">
                    Share you Wavium homepage link with your followers, and we&apos;ll handle the rest.
                </p>
            </div>
            <div className="flex w-full mb-10 overflow-hidden gap-4">
                <div className="w-1/2 flex flex-col gap-3">
                    <span className="text-xl text-main-green">One link</span>
                    <p className="text-7xl text-semibold"> <span className='text-text-content-darker'>All You Create.</span> <br /> One Link</p>
                    <Image src={phoneImage} alt='Phone showing url' />
                </div>
                <div className="w-1/2 flex flex-col gap-24 pl-2">
                    <span className="text-xl text-main-green">Collect Subscribers</span>
                    <p className="text-7xl text-semibold"> <span className='text-text-content-darker'>Emails. <br />Phone #s.</span> <br />All Yours</p>
                </div>
            </div>
            <Link href={'#'} className='mx-auto'>
                <Button size={'lg'} className=' px-12'>Get Started</Button>
            </Link>
        </section>
    )
}

export default Step2