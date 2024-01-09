"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserAvatar from "@/components/UserAvatar"
import { Session } from "next-auth"
import { Button } from "./ui/button"
import { signIn, signOut } from "next-auth/react"
import { Loader2, StarIcon } from "lucide-react"
import ManageAccountButton from "./ManageAccountButton"
import { useSubscriptionStore } from "@/app/store/store"


type Props = {
    session: Session | null
}

const UserButton = ({ session }: Props) => {
    const subscription = useSubscriptionStore((state) => state.subscription)
    // console.log(subscription)
    if (!session) {
        return (
            <Button variant={"outline"} onClick={() => signIn()}>
                Sign in
            </Button>
        )
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar image={session?.user?.image} name={session?.user?.name} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {subscription === undefined && (
                    <DropdownMenuItem>
                        <Loader2 className="animate-spin transition-all" />
                    </DropdownMenuItem>
                )}
                {subscription?.role === "pro" && (
                    <>
                        <DropdownMenuItem className="text-sm text-[#E935C1] space-x-1 font-semibold animate-pulse flex items-center justify-center">
                            <StarIcon fill="#E935C1" /> <p>PRO</p>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <ManageAccountButton />
                        </DropdownMenuItem>
                    </>
                )}
                <DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default UserButton