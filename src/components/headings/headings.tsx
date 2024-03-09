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
        return <h2 className={cn('text-4x md:text-5xl lg:text-7xl font-medium ', className)}{...props}>{text}</h2>
    } else if (variant === 'hs') {
        return <h2 className={cn('text-4x md:text-5xl lg:text-7xl font-semibold ', className)}{...props}>{text} <span className='text-brand-color'>{text_color}</span></h2>
    } else if (variant === 'hb-l') {
        return <h3 className={cn('text-4x md:text-5xl lg:text-8xl font-bold ', className)}{...props}>{text}</h3>
    }
    return (
        <div>Headings</div>
    )
}

export default Headings