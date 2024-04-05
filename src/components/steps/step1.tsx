import React from 'react'
import Headings from '../headings/headings'
import { Button } from '../ui/button'
import Link from 'next/link'
import step1Image from '/public/assets/image2.png'
import step1Shape from '/public/assets/Shape-66.svg'
import Image from 'next/image'

const Step1 = () => {
    return (
        <section className='min-h-screen py-10'>
            <div className="flex flex-col items-center mx-auto">
                <span  data-aos="fade-up"  className="text-lg font-semibold text-light-blue uppercase mb-2">Step 1</span>
                <Headings variant='hs' text='Connect Your Content' />
                <p  data-aos="fade-up"  className="text-text-content text-base md:text-2xl px-1 mt-2 mb-8 max-w-[750px] text-center text-pretty">Bring all of your content together and get a Homepage that
                    automatically updates whenever you create anywhere online.
                </p>
                <Button  data-aos="fade-up"  variant={'outline'} size={'lg'} className='md:py-6'>View Available Sources</Button>
            </div>

            <div className="flex flex-col lg:flex-row container mt-40">
                <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
                    <span className="text-xl font-medium mb-10 md:mb-16">Your Homepage</span>
                    <Headings variant='hs' text='Your Content.' className='mb-2' />
                    <Headings variant='hs' text='All in' text_color='One Spot' />
                    <ul className='mt-5 mb-12 space-y-2'>
                        <li className="flex items-center gap-2 md:text-lg">
                            <div className="rounded-full px-2 bg-[#2d2d2d]">1</div>
                            Bring all of your content together into one homepage.
                        </li>
                        <li className="flex items-center gap-2 md:text-lg">
                            <div className="rounded-full px-2 bg-[#2d2d2d]">2</div>
                            Your pages automatically update whenever you create.
                        </li>
                    </ul>
                    <div className="flex items-center justify-center lg:justify-start gap-4 pb-14">
                        <Link href={'#'}>
                            <Button>Get Started Now</Button>
                        </Link>
                        <Link href={'#'}>
                            <Button variant={'outline'}>View A Demo</Button>
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-[200px] md:h-[400px] lg:h-auto relative flex items-end justify-center">
                    <Image src={step1Image} alt='Spotify Charlie Puth album' className='absolute top-0 w-auto h-full lg:max-h-[400px] 2xl:max-h-[450px]' />
                    <Image src={step1Shape} alt='Spotify Charlie Puth album' className='hidden lg:block w-[250px] lg:max-w-[309px] h-auto' />
                </div>
            </div>
        </section>
    )
}

export default Step1