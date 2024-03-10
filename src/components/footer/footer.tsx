import Image from "next/image"
import Link from "next/link"
import footerLogo from '../../../public/assets/Logo.svg'

const Footer = () => {
    return (
        <footer className="container flex flex-col lg:flex-row gap-10 justify-between items-center py-10">
            <div className="flex flex-col items-center lg:items-start gap-1">
                <Link href={'/'} className="flex items-center gap-4">
                    <Image src={footerLogo} alt='Marico' height={42} width={45} />
                    <span className="font-extrabold text-4xl">Marico</span>
                </Link>
                <Link className="text-text-content text-lg" href={'mailto:info@marico.co'}>info@marico.co</Link>
            </div>
            <nav>
                <ul className='flex items-center gap-10 text-text-content'>
                    <li className='hover:text-hover-blue transition-colors duration-200'>
                        <Link href={'#'}>About</Link>
                    </li>
                    <li className='hover:text-hover-blue transition-colors duration-200'>
                        <Link href={'#'}>Price</Link>
                    </li>
                    <li className='hover:text-hover-blue transition-colors duration-200'>
                        <Link href={'#'}>Blog</Link>
                    </li>
                    <li className='hover:text-hover-blue transition-colors duration-200'>
                        <Link href={'#'}>Sign in</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer