import { CheckIcon, Divide } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import CheckoutButton from './CheckoutButton'

type Props = {
    redirect: boolean,
    tier: {
        id: null | string
        name: string
        price: string | null
        desc: string
        features: string[]
    }
}

const PricingCard = ({tier, redirect}: Props) => {
  return (
      <div key={tier.id} className='flex flex-col rounded-3xl bg-white p-6 sm:p-10 shadow-xl h-[530px]'>
          <h3 className='font-semibold text-gray-900'>{tier.name}</h3>
          <div className='mt-4'>
              {tier.price ? (
                  <>
                      <span className='text-gray-900 font-bold text-5xl'>{tier.price}</span>
                      <span className='text-gray-900 font-semibold'>/month</span>
                  </>
              ) :
                  <span className='text-gray-900 font-bold text-5xl'>Free</span>
              }
          </div>
          <p className='mt-6 text-gray-600'>{tier.desc}</p>
          <ul
              role='list'
              className='mt-10 space-y-4 text-sm text-gray-600'
          >
              {tier.features.map((feature) => (
                  <li key={feature} className='flex items-center gap-2'>
                      <CheckIcon className='text-indigo-500 w-5 h-5' />
                      {feature}
                  </li>
              ))}
          </ul>


          {redirect ?
              <Button className={`mt-auto bg-indigo-500 text-white hover:bg-indigo-500 hover:opacity-80 transition`}>
                  <Link href="/register">
                      Get started today
                  </Link>
              </Button>
              : tier.id && <div className="mt-auto bg-indigo-500 text-white hover:bg-indigo-500 hover:opacity-80 transition rounded-md"><CheckoutButton /></div>}
      </div>
  )
}

export default PricingCard