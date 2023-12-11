"use client"

import { useSession } from 'next-auth/react'
import { Button } from './ui/button'

type Props = {}

const CheckoutButton = (props: Props) => {
    const {data: session} = useSession()

    const createCheckoutSession = async () => {
        if(!session) return
    }

  return (
    <div>
          <Button onClick={()=> createCheckoutSession} className={`mt-auto w-full bg-indigo-500 text-white hover:bg-indigo-500 hover:opacity-80 transition`}>Checkout</Button>
    </div>
  )
}

export default CheckoutButton