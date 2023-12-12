import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import UserButton from './UserButton'
import Link from 'next/link'
import { getAuthSession } from '@/lib/nextauth'
import { MessageSquareIcon } from 'lucide-react'
import CreateChatButton from './CreateChatButton'

type Props = {}

const Header = async (props: Props) => {

    const session = await getAuthSession()
    // console.log(session)
  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
        <nav className='flex flex-col sm:flex-row items-center lg:justify-between bg-transparent max-w-7xl mx-auto h-[100px] pl-2'>
            <Link href="/" prefetch={false} className='font-bold text-2xl lg:text-3xl p-2'>Chat With Anyone</Link>
            <div className='flex items-center space-x-4 h-full'>

                {/* Selection of Language */}

                {session ? (
                    <>
                    <Link href="/chat" prefetch={false}>
                        <MessageSquareIcon />
                    </Link>

                    <CreateChatButton />
                    </>
                ) : (

                    <Link href="/pricing">
                        Pricing
                    </Link>
                )}


                <ThemeToggle />
                <UserButton session={session}/>
            </div>
        </nav>
    </header>
  )
}

export default Header