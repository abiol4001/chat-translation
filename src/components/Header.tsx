import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import UserButton from './UserButton'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
        <nav className='flex flex-col sm:flex-row items-center lg:justify-between bg-transparent max-w-7xl mx-auto p-5 pl-2'>
            <Link href="/" prefetch={false} className='font-bold text-2xl lg:text-3xl p-2'>Chat With Anyone</Link>
            <div className='flex  space-x-4'>

                {/* Selection of Language */}


                <ThemeToggle />
                <UserButton />
            </div>
        </nav>
    </header>
  )
}

export default Header