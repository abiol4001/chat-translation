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


type Props = {
    session: Session | null
}

const UserButton = ({session}: Props) => {
    if(!session) {
       return ( <Button variant={"outline"} onClick={()=> signIn()}>
            Sign in
        </Button>)
    }
  return (
      <DropdownMenu>
          <DropdownMenuTrigger>
              <UserAvatar image={session?.user?.image} name={session?.user?.name} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuItem onClick={()=> signOut()}>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>

  )
}

export default UserButton