import React from 'react'
import Headings from '../headings/headings'
import { Button } from '../ui/button'
import Link from 'next/link'
import step1Image from '/public/assets/image.png'
import step3Shape from '../../../public/assets/Shape-66.svg'
import Image from 'next/image'

const Step3 = () => {
    return (
        <section className='h-screen py-10'>
            <div className="flex flex-col items-center mx-auto">
                <span className="text-lg font-semibold text-light-blue uppercase mb-2">Step 3</span>
                <Headings variant='hs' text='Send Emails & Text Messages' />
                <p className="text-text-content text-2xl mt-1 mb-8 max-w-[750px] text-center text-pretty">
                    No more going through a social platform. Reach and engage
                    your audience directly over email and text massage.
                </p>
            </div>

            <div className="flex container mt-40">
                <div className="flex flex-col w-1/2">
                    <span className="text-xl font-medium mb-16 md:mb-16">Create & Share</span>
                    <Headings variant='hs' text='Reach Your' className='mb-2' />
                    <Headings variant='hs' text='Audience' text_color='Directly.' />
                    <ul className='mt-5 mb-12 space-y-2'>
                        <li className="flex items-center gap-2 text-lg">
                            <div className="rounded-full px-2 bg-[#2d2d2d]">1</div>
                            Embed content or create something new to share.
                        </li>
                        <li className="flex items-center gap-2 text-lg">
                            <div className="rounded-full px-2 bg-[#2d2d2d]">2</div>
                            Share content over email, text message or your homepage.
                        </li>
                    </ul>
                    <div className="flex items-center gap-4 pb-14">
                        <Link href={'#'}>
                            <Button>Get Started Now</Button>
                        </Link>
                        <Link href={'#'}>
                            <Button variant={'outline'}>View A Demo</Button>
                        </Link>
                    </div>
                </div>
                <div className="w-1/2 relative flex items-end justify-end">
                    <Image src={step1Image} alt='Spotify Blackpink album' className='absolute top-0 w-auto h-auto' />
                    <Image src={step3Shape} alt='Shape' className='max-w-[309px] h-auto' />
                </div>
            </div>
        </section>
    )
}

export default Step3