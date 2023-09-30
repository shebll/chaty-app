import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='fixed top-0 shadow-lg w-full z-30 bg-white'>
      <div className='px-2 md:px-0 container py-2 flex justify-between items-center mx-auto'>
        <div className="">
          <Image src={"/images/active_chat_logo.svg"} alt='hichaty logo' width={70} height={60} priority />
        </div>
        <nav>
          <ul className="flex justify-center items-center gap-6 font-medium text-xl" >
            <li className="flex justify-center items-center gap-2 ">
              <Image src={"/images/Language.svg"} alt='language' width={20} height={30} />
              <Link href={"/"}>English</Link>
            </li>
            <li>
              <Link href={"/"}>Login</Link>
            </li>
            <li>
              <Link href={"/"}
                className='bg-[#53A8CB] text-white px-4 py-3 rounded-lg'>Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
