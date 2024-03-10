import React from 'react'
import Headings from '../headings/headings'
import Image from 'next/image'
import twitterImage from '/public/assets/tweet.png'
import styles from '../../styles/generalStyles.module.css';

const Feedback = () => {
    return (
        <section className='pt-20 lg:py-20 flex flex-col justify-center items-center'>
            <Headings variant='hs' text='Experts Agree' />
            <Image className='w-full lg:w-[1600px] xl:w-[1800px] h-auto mt-10 lg:mt-20 opacity-50' src={twitterImage} alt='Peoples  comments on twitter' />

            <div className={`${styles.feedbackBg} w-screen h-[400px] lg:h-[800px] lg:mt-10 flex justify-center items-center`}>
                <p className="text-base px-10 md:px-0 md:text-3xl lg:text-7xl font-semibold max-w-[1200px] text-center">We&apos;ve helped over 1,000 creators for claim control of their audience.</p>
            </div>
        </section>
    )
}

export default Feedback