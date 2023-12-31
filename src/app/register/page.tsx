import PricingCard from '@/components/PricingCard'
import { getAuthSession } from '@/lib/nextauth'
import React from 'react'

type Props = {}

const tiers = [
    {
        name: " Starter",
        id: null,
        href: "#",
        price: null,
        desc: "Get chatting right away with anyone, anywhere!",
        features: [
            "20 Messages Chat Limit in Chat",
            "2 Participants limit in Chat",
            "3 Chat Rooms Limit",
            "Supports 2 languages",
            "48-hour support response time"
        ]
    },
    {
        name: "Pro",
        id: "starter_Id",
        href: "#",
        price: "$9.99",
        desc: "Unlock the Full Potential with Pro!",
        features: [
            "Unlimited Messages Chat in Chat",
            "Unlimited Participants in Chat",
            "Unlimited Chat Rooms",
            "Supports up to 10 languages",
            "1-hour dedicated support response time",
            "Early access to new features"
        ]
    },
]

const Register = async (props: Props) => {
    const session = await getAuthSession()
    return (
        <div className='isolate overflow-hidden bg-gray-900 min-h-[calc(100vh-100px)]'>
            <div className='mx-auto max-w-7xl px-6 pb-16 pt-24 text-center sm:pt-32 lg:px-8'>
                <div className='mx-auto max-w-4xl'>
                    <p className='text-3xl sm:text-5xl tracking-tight font-bold mt-2 text-white'>
                        {`Let's handle your Membership ${session?.user?.name?.split(" ")?.[0]}`}
                    </p>
                </div>

                <div className='mt-6 relative'>
                    <svg
                        viewBox='0 0 1200 1024'
                        className='absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12'
                    >
                        <ellipse
                            cx={604}
                            cy={512}
                            fill='url(#radial-gradient-pricing)'
                            rx={604}
                            ry={512}
                        />
                        <defs>
                            <radialGradient id='radial-gradient-pricing'>
                                <stop stopColor="#777506" />
                                <stop offset={1} stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>

                <div className='mx-auto max-w-md lg:max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8 text-start mt-10'>
                    {tiers.map((tier) => (
                        <PricingCard key={tier.id} tier={tier} redirect={false} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Register