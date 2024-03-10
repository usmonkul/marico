"use client"
import Image from 'next/image'
import headerLogo from '../../../public/assets/Logo.svg'
import Link from 'next/link'
import { Button } from '../ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from 'react'
import { Menu, X } from 'lucide-react'


const Header = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: 'About' },
        { id: 2, text: 'Price' },
        { id: 3, text: 'Blog' },
    ];
    return (
        <header className='container mx-auto py-10 flex items-center justify-between'>
            <Link href={'/'} className="flex items-end gap-2 md:gap-4">
                <Image className='h-11 w-11' src={headerLogo} alt='Marico' height={42} width={45} />
                <span className="font-extrabold text-3xl md:text-4xl">Marico</span>
            </Link>

            <nav className='hidden md:block'>
                <ul className='flex items-center gap-10 text-text-content'>
                    <li className='hover:text-hover-blue transition-colors duration-200'>
                        <DropdownMenu>
                            <DropdownMenuTrigger className='flex items-center gap-2'>Use Cases <span className='mb-2'>&#8964;</span></DropdownMenuTrigger>
                            <DropdownMenuContent className='bg-transapernt text-text-content border-none'>
                                <DropdownMenuLabel>Cases</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Case 1</DropdownMenuItem>
                                <DropdownMenuItem>Case 2</DropdownMenuItem>
                                <DropdownMenuItem>Case 3</DropdownMenuItem>
                                <DropdownMenuItem>Case 4</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                    <li className='hover:text-hover-blue transition-colors duration-200'>
                        <Link href={'#'}>About</Link>
                    </li>
                    <li className='hover:text-hover-blue transition-colors duration-200'>
                        <Link href={'#'}>Price</Link>
                    </li>
                    <li className='hover:text-hover-blue transition-colors duration-200'>
                        <Link href={'#'}>Blog</Link>
                    </li>
                </ul>
            </nav>

            <div className="hidden lg:flex items-center gap-4 font-medium">
                <Link href={'#'}>
                    <Button variant={'ghost'}>Login</Button>
                </Link>
                <Link href={'#'}>
                    <Button>Sign Up</Button>
                </Link>
            </div>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <X /> : <Menu />}
            </div>

            {/* Mobile Navigation Menu */}
            <nav
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 flex flex-col'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                {/* Mobile Logo */}
                <Link href={'/'} className="flex items-end gap-2 md:gap-4 p-4 pl-10">
                    <Image className='h-11 w-11' src={headerLogo} alt='Marico' height={42} width={45} />
                    <span className="font-extrabold text-3xl md:text-4xl">Marico</span>
                </Link>

                {navItems.map(item => (
                    <Link href={'#'}
                        key={item.id}
                        className='p-4 pl-10 block hover:text-hover-blue transition-colors duration-200'
                    >
                        {item.text}
                    </Link>
                ))}
                <div className='hover:text-hover-blue transition-colors duration-200 p-4 pl-10'>
                    <DropdownMenu>
                        <DropdownMenuTrigger className='flex items-center gap-2'>Use Cases <span className='mb-2'>&#8964;</span></DropdownMenuTrigger>
                        <DropdownMenuContent className='bg-transapernt text-white border-none ml-2'>
                            <DropdownMenuLabel>Cases</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className='hover:text-hover-blue transition-colors duration-200'>Case 1</DropdownMenuItem>
                            <DropdownMenuItem className='hover:text-hover-blue transition-colors duration-200'>Case 2</DropdownMenuItem>
                            <DropdownMenuItem className='hover:text-hover-blue transition-colors duration-200'>Case 3</DropdownMenuItem>
                            <DropdownMenuItem className='hover:text-hover-blue transition-colors duration-200'>Case 4</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="flex items-end gap-4 font-medium p-5 pl-10 h-full self-center justify-items-end">
                    <Link href={'#'}>
                        <Button variant={'ghost'}>Login</Button>
                    </Link>
                    <Link href={'#'}>
                        <Button>Sign Up</Button>
                    </Link>
                </div>
            </nav>

        </header>
    )
}

export default Header