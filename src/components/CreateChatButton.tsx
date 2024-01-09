"use client"

import { MessageSquarePlusIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { useSubscriptionStore } from "@/app/store/store"
import { v4 as uuidv4 } from 'uuid';
import { serverTimestamp, setDoc } from "firebase/firestore"
import { addChatRef } from "@/lib/converters/chatMembers"

type Props = {}

const CreateChatButton = (props: Props) => {
    const { data: session } = useSession()
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)
    const subscription = useSubscriptionStore(state => state.subscription)


    const createNewChat = async () => {
      if(!session?.user.id) return

      setIsLoading(true)



      const chatId = uuidv4()

      await setDoc(addChatRef(chatId, session.user.id!), {
        userId: session.user.id!,
        email: session.user.email!,
        timestamp: serverTimestamp(),
        isAdmin: true,
        chatId: chatId,
        image: session?.user.image || ""
      })

        // router.push("/chat/chatId")
    }

  return (
    <Button onClick={createNewChat} variant={"ghost"}>
        <MessageSquarePlusIcon />
    </Button>
  )
}

export default CreateChatButton