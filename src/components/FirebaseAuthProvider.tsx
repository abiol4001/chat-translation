'use client'

import { auth } from "@/lib/firebase"
import { signInWithCustomToken } from "firebase/auth"
import { Session } from "next-auth"
import { useSession } from "next-auth/react"
import { useEffect } from "react"

type Props = {
    children: React.ReactNode
}

async function syncFirebaseAuth(session: Session) {
    if(session && session.firebaseToken) {
        try {
            await signInWithCustomToken(auth, session.firebaseToken)
        } catch (error) {
            console.log("Error signing in with custom Token")
        }
    } else {
        auth.signOut()
    }
}

const FirebaseAuthProvider = ({children}: Props) => {
    const {data:session} = useSession()

    useEffect(() => {
        if(!session) return
        syncFirebaseAuth(session)
    }, [session])

  return (
    <>{children}</>
  )
}

export default FirebaseAuthProvider