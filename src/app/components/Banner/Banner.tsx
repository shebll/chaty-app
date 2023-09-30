import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <section className='container flex justify-center items-center flex-col gap-16 mx-auto'>
      <div className="flex justify-center items-center flex-col gap-4">
        <h1 className="text-6xl font-bold text-[#000000]">Let’s connect with HiChaty</h1>
        <h2 className="text-3xl font-semibold text-[#4A4A4A] ">Secure and Easier to Use </h2>
        <p className='text-lg flex justify-center items-center flex-col gap-2'>
          Provide you to more Connectivity with <br />
          <span className="">
            <span className='font-semibold text-[#53A8CB] uppercase'>“Friends”</span>
            <span className='font-semibold text-[#EC99BA] uppercase'> “Family” </span>
            <span className='font-semibold text-[#53A8CB] uppercase'>”Business”</span><br />
          </span>
          Via Chat & Calls.
        </p>
      </div>
      <div className="relative">
        <Image src={"/images/Web_Home_Screen.png"} alt='Web Home Screen image' width={700} height={300} />
        <Image src={"/images/cam.svg"}
          alt='Web Home Screen image' width={80} height={80}
          className=' absolute left-[-20px] bottom-[40%]' />
        <Image src={"/images/chat.svg"}
          alt='Web Home Screen image' width={100} height={100}
          className='absolute left-[45px] top-[-30%] ' />
        <Image src={"/images/textOnChatImage.png"}
          alt='Web Home Screen image' width={140} height={100}
          className='absolute left-[27px] top-[-23%] ' />
        <Image src={"/images/phone.svg"}
          alt='Web Home Screen image' width={70} height={70}
          className='absolute right-[-100px] top-[-40%]' />
        <Image src={"/images/women.png"}
          alt='Web Home Screen image' width={60} height={60}
          className='absolute left-[220px] top-[-13%]' />
        <Image src={"/images/Sam.png"}
          alt='Web Home Screen image' width={60} height={60}
          className='absolute left-[-100px] top-[-40%]' />
        <Image src={"/images/video.svg"}
          alt='Web Home Screen image' width={80} height={80}
          className='absolute right-[-20px] bottom-[10%]' />
        <div className="absolute right-[-70px] top-[-10%] px-6 py-2 text-white bg-orange-500 flex items-center justify-center gap-2 rounded-full">
          <Image src={"/images/regular_quitemode.png"} width={20} height={20} alt='regular_quitemode image' />
          <span>QuietMode</span>
        </div>
      </div>
    </section >
  )
}

export default Banner
