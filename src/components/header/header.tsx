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


const Header = () => {
    return (
        <header className='container mx-auto py-10 flex items-center justify-between'>
            <Link href={'/'} className="flex items-center gap-4">
                <Image src={headerLogo} alt='Marico' height={42} width={45} />
                <span className="font-extrabold text-4xl">Marico</span>
            </Link>

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

            <div className="flex items-center gap-4 font-medium">
                <Button variant={'ghost'}>Login</Button>
                <Button>Sign Up</Button>

            </div>

        </header>
    )
}

export default Header