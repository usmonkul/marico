import React from 'react'
import Headings from '../headings/headings'
import Image from 'next/image'
import twitterImage from '/public/assets/tweet.png'

const Feedback = () => {
    return (
        <section className='py-20 flex flex-col justify-center items-center'>
            <Headings variant='hs' text='Experts Agree' />
            <Image className='w-auto lg:w-[1600px] xl:w-[1800px] h-auto mt-20 opacity-50' src={twitterImage} alt='Peoples comments on twitter' />
        </section>
    )
}

export default Feedback