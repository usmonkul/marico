import { cn } from '@/lib/utils';
import React from 'react'

interface headingInterface {
    variant: string;
    text: string;
    text_color?: string;
    className?: string;
}
const Headings = ({ variant, text, className, text_color, ...props }: headingInterface) => {
    // h1, h2, h3,
    if (variant === 'hm') {
        return <h2 data-aos="fade-up" className={cn('text-4xl md:text-5xl lg:text-7xl font-medium', className)}{...props}>{text}</h2>
    } else if (variant === 'hs') {
        return <h2 data-aos="fade-up" className={cn('text-4xl md:text-5xl lg:text-7xl font-semibold text-center md:text-left', className)}{...props}>{text} <span className='text-brand-color'>{text_color}</span></h2>
    } else if (variant === 'hb-l') {
        return <h3 data-aos="fade-up" className={cn('text-4xl md:text-5xl lg:text-7xl 3xl:text-8xl font-bold ', className)}{...props}>{text}</h3>
    }
    return (
        <p>{text}</p>
    )
}

export default Headings