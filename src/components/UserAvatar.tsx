import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

type Props = {
    name?: string | null
    image?: string | null
    className?: string
}

const UserAvatar = ({name, image, className}: Props) => {
  return (
      <Avatar>
        {image && (
        <Image src={image || "https://github.com/shadcn.png"} alt={name || ""} width={40} height={40} priority />
        )}
          {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
          <AvatarFallback className="uppercase" delayMs={1000}>{name?.split(" ").map((n)=> n[0]).join("")}</AvatarFallback>
      </Avatar>

  )
}

export default  UserAvatar