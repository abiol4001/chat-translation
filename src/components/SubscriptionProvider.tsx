"use client"
import { useSubscriptionStore } from '@/app/store/store'
import { subscriptionRef } from '@/lib/converters/subscription'
import { onSnapshot } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

type Props = {
    children: React.ReactNode
}

const SubscriptionProvider = ({children}: Props) => {
    const { data: session } = useSession()
    const setSubscription = useSubscriptionStore((state) => state.setSubscription)

    useEffect(() => {
        if (!session) return

        return onSnapshot(subscriptionRef(session.user.id), (snapshot) => {
            if (snapshot.empty) {
                console.log("User has no subscription")
                setSubscription(null)
                return
            } else {
                console.log("User has subscription")
                setSubscription(snapshot.docs[0].data())
            }
        },
            (error) => {
                console.log("Error getting document", error)
            }
        )
    }, [session, setSubscription])
    return (
        <>{children}</>
    )
}

export default SubscriptionProvider