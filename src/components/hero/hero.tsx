import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className='min-h-[80vh] py-20 container flex-grow flex flex-col items-center justify-center gap-20 lg:gap-32'>
            <h1  data-aos="fade-up" className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-center">
                Own your audience. <br />
                <p className="bg-gradient-to-r from-[#FE6783] to-[#FFBF84] inline-block text-transparent bg-clip-text">So you don&apos;t lose them.</p>
            </h1>
            <div  data-aos="fade-up" className='flex flex-col items-center'>
                <p className="text-xl md:text-3xl lg:text-4xl font-medium text-center mb-6 md:mb-10">
                    Turn your audience into email and <br />
                    text message subscribers.
                </p>
                <div className="flex items-center gap-4 md:gap-10 mb-5">
                    <Link href={'#'}>
                        <Button size={'lg'} className='md:px-14 md:py-7'>Get Started Now</Button>
                    </Link>
                    <Link href={'#'}>
                        <Button size={'lg'} className='md:px-14 md:py-7' variant={'outline'}>View A Demo</Button>
                    </Link>
                </div>
                <div className="flex items-center text-center justify-center font-bold text-lg md:text-xl">
                    <div className="h-4 w-4 bg-green-300 rounded-full flex items-center justify-center mr-2">
                        <div className="h-3 w-3 bg-green-600 rounded-full"></div>
                    </div>
                    1000+ <span className="ml-2 text-text-content font-normal">creators have already started</span>
                </div>
            </div>
        </section>
    )
}

export default Hero