"use client"

import { useSession } from 'next-auth/react'
import { Button } from './ui/button'
import { useState } from 'react'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Loader2 } from 'lucide-react'

type Props = {}
interface SnapData {
    error: string; 
    url: string;   
}

const CheckoutButton = (props: Props) => {
    const { data: session } = useSession()
    const [isLoading, setIsLoading] = useState(false)

    const createCheckoutSession = async () => {
        if (!session?.user?.id) return

        setIsLoading(true)

        const docRef = await addDoc(collection(db, 'customers', session.user.id, 'checkout_sessions'), {
            price: "price_1OOeLQGZbxGml25FrQe4cleA",
            success_url: window.location.origin,
            cancel_url: window.location.origin,
            // collect_shipping_address: true,
        })

        return onSnapshot(docRef, (snap) => {
            const {error, url} = snap.data() as {
                error?: {message: string};
                url?: string
            };
            
            if (error) {
                // Show an error to your customer and
                // inspect your Cloud Function logs in the Firebase console.
                alert(`An error occured: ${error.message}`);
                setIsLoading(false)
            }
            if (url) {
                // We have a Stripe Checkout URL, let's redirect.
                window.location.assign(url);
                setIsLoading(false)
            }
        })
    }

    return (
        <div>
            <Button disabled={isLoading} onClick={() => createCheckoutSession()} className={`mt-auto w-full bg-indigo-500 text-white hover:bg-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed hover:opacity-80 transition`}>
                {isLoading
                    ? <>
                        <Loader2 className='animate-spin mr-1 h-4 w-4' /> Loading
                    </>
                    : "Sign up"}
            </Button>
        </div>
    )
}

export default CheckoutButton