import MenuItem from './MenuItem'
import {AiFillHome}from "react-icons/ai"
import {BsInfoCircleFill} from "react-icons/bs"
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'
export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto py-5 items-center'>
      <div className='flex'>
        <MenuItem title="HOME" address ="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address ="/about" Icon={BsInfoCircleFill} />
      </div>
      <div className='flex items-center space-x-5'>
        <DarkModeSwitch/>
        <Link href='/'>
          <h2 className='text-2xl'>
            <span className='mr-1 font-bold bg-amber-500 py-1 px-2 rounded '>IMDB</span>
            <span className='text-1xl hidden sm:inline'>Clone</span></h2>
        </Link>
      </div>
    </div>
  )
}
