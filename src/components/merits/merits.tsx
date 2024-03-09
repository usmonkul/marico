import React from 'react'
import Headings from '../headings/headings'
import SmileEmoji from '/public/assets/Smile_emoji.svg'
import PartyEmoji from '/public/assets/Party_emoji.svg'
import HappyEmoji from '/public/assets/Happy_emoji.svg'
import Image from 'next/image'


const Merits = () => {
    return (
        <section className='container flex flex-col items-center py-20'>
            <Headings variant='hs' text='Why Creators Love Marico' />
            <ul className="flex items-center gap-28 mt-16">
                <li className='flex flex-col items-center justify-center'>
                    <div className="flex items-center justify-center gap-2 text-3xl font-semibold text-center mb-2">
                        <Image src={SmileEmoji} alt="Smile Emoji" width={23} height={23} />
                        Reduced Anxiety
                    </div>
                    <span className="text-text-content text-lg">Never worry about loosing your audience.</span>
                </li>
                <li className='flex flex-col items-center justify-center'>
                    <div className="flex items-center justify-center gap-2 text-3xl font-semibold text-center mb-2">
                        <Image src={HappyEmoji} alt="Smile Emoji" width={23} height={23} />
                        Lower Workload
                    </div>
                    <span className="text-text-content text-lg">Just share one link. We&lsquo;ll handle the rest.</span>
                </li>
                <li className='flex flex-col items-center justify-center'>
                    <div className="flex items-center justify-center gap-2 text-3xl font-semibold text-center mb-2">
                        <Image src={PartyEmoji} alt="Smile Emoji" width={23} height={23} className='w-auto h-auto' />
                        More Time
                    </div>
                    <span className="text-text-content text-lg">Spend less time on marketing tools</span>
                </li>
            </ul>
        </section>
    )
}

export default Merits