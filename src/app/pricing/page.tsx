import PricingCard from '@/components/PricingCard'
import React from 'react'

type Props = {
  redirect: boolean
}

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

const PricingPage = ({ redirect = true }: Props) => {
  return (
    <div className='isolate overflow-hidden bg-gray-900 min-h-screen'>
      <div className='mx-auto max-w-7xl px-6 pb-16 pt-24 text-center sm:pt-32 lg:px-8'>
        <div className='mx-auto max-w-4xl'>
          <h2 className='text-base font-semibold leading-7 text-indigo-400'>Pricing</h2>
          <p className='text-3xl sm:text-5xl tracking-tight font-bold mt-2 text-white'>
            The right price for you, {" "}
            <br className='lg:hidden hidden sm:inline' />
            whoever you are
          </p>
        </div>

        <div className='mt-6 relative'>
          <p className='mx-auto max-w-2xl text-lg leading-8 text-white/60'>
            We are 99% sure we have a plan to match 100% of your needs.
          </p>
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
            <PricingCard key={tier.id} tier={tier} redirect={true}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingPage