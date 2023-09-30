import Image from 'next/image'
import React from 'react'

export default function Features() {
  return (
    <section className='container mx-auto flex justify-center items-center gap-40 flex-wrap'>
      <div className="flex justify-center items-center gap-4 flex-col text-center">
        <Image src={"/images/smile.svg"} alt='smile image' width={80} height={80} />
        <h1 className='text-lg font-bold text-[#47525D]'>Easy to use</h1>
        <p className='text-[#47525D]'>
          Easy to understand all the functions, <br />
          Connect with Friends and Family direct, <br />
          No Hidden function.
        </p>
      </div>
      <div className="middle-card flex justify-center items-center gap-4 flex-col text-center">
        <Image src={"/images/pentool.svg"} alt='smile image' width={80} height={80} />
        <h1 className='text-lg font-bold text-[#47525D]'>Awesome Design</h1>
        <p className='text-[#47525D]'>
          Grid and List view Design,<br />
          Multiple color in the UI,<br />
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 flex-col text-center">
        <Image src={"/images/lock.svg"} alt='smile image' width={80} height={80} />
        <h1 className='text-lg font-bold text-[#47525D]'>More Secure</h1>
        <p className='text-[#47525D]'>
          User can connect with Permissions
          (Chat & Calls),<br />
          Profile View<br />
          (Public & Private),<br />
        </p>
      </div>
    </section>
  )
}
