'use client'

import { useSubscriptionStore } from "@/app/store/store"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

type Props = {}

const UpgradeBanner = (props: Props) => {

    const subscription = useSubscriptionStore((state) => state.subscription)
    // console.log(subscription?.status)
    const isPro = subscription?.role === "pro"
    const router = useRouter()

    if(subscription === undefined || isPro) return null
  return (
    <Button 
    className="w-full rounded-none bg-gradient-to-r from-[#7775D6] to-[#E935C1] text-white hover:opacity-75 transition-all"
    onClick={()=> router.push("/register")}
    >
        Upgrade to PRO to unlock all features!
    </Button>
  )
}

export default UpgradeBanner