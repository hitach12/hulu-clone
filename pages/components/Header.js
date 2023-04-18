import Image from "next/image"
import { useRouter } from "next/router"
import logo from '../assets/hulu.png'
import HeaderItem from "./HeaderItem"
import {HomeIcon , BadgeCheckIcon,CollectionIcon,LightningBoltIcon,SearchIcon,UserIcon} from "@heroicons/react/outline"

export default function Header() {
    const router = useRouter()


  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">

        <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem title= "HOME" Icon = {HomeIcon}/>
            <HeaderItem title= "TRENDING" Icon = {LightningBoltIcon}/>
            <HeaderItem title= "VERIFIED" Icon = {BadgeCheckIcon}/>
            <HeaderItem title= "COLLECTIONS" Icon = {CollectionIcon}/>
            <HeaderItem title= "SEARCH" Icon = {SearchIcon}/>
            <HeaderItem title= "ACCCOUNT" Icon = {UserIcon}/>

        </div>
            <Image 
            className="object-conatain"
            src={logo}
            height={100}
            width={200}
            alt= "logo"
                        ></Image>
    </header>
  )
}
