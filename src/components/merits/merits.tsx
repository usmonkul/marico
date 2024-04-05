import React from 'react'
import Headings from '../headings/headings'
import SmileEmoji from '/public/assets/Smile_emoji.svg'
import PartyEmoji from '/public/assets/Party_emoji.svg'
import HappyEmoji from '/public/assets/Happy_emoji.svg'
import Image from 'next/image'


const Merits = () => {
    return (
        <section className='container flex flex-col items-center py-20'>
            <Headings data-aos="fade-up" variant='hs' text='Why Creators Love Marico' />
            <ul className="flex flex-col lg:flex-row items-center gap-16 md:gap-24 xl:gap-28 mt-16">
                <li data-aos="fade-up" className='flex flex-col items-center justify-center'>
                    <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-semibold text-center mb-2">
                        <Image src={SmileEmoji} alt="Smile Emoji" width={23} height={23} className='w-8 h-auto'  />
                        Reduced Anxiety
                    </div>
                    <span className="text-text-content text-base md:text-lg text-center">Never worry about loosing your audience.</span>
                </li>
                <li data-aos="fade-up" className='flex flex-col items-center justify-center'>
                    <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-semibold text-center mb-2">
                        <Image src={HappyEmoji} alt="Smile Emoji" width={23} height={23} className='w-8 h-auto'  />
                        Lower Workload
                    </div>
                    <span className="text-text-content text-base md:text-lg text-center">Just share one link. We&lsquo;ll handle the rest.</span>
                </li>
                <li data-aos="fade-up" className='flex flex-col items-center justify-center'>
                    <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-semibold text-center mb-2">
                        <Image src={PartyEmoji} alt="Smile Emoji" width={23} height={23} className='w-8 h-auto' />
                        More Time
                    </div>
                    <span className="text-text-content text-base md:text-lg text-center">Spend less time on marketing tools</span>
                </li>
            </ul>
        </section>
    )
}

export default Merits