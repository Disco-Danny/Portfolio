import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' />
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw] text-white'>
                Don't be shy, <span className='text-purple'>Reach Out</span> to me.
                 
            </h1>
            <p className='text-white-900 text-xl md:mt-10 my-5 text-center'>I am very Amicable! Let's talk and figure out how I can be of help.</p>
            <a href="mailto:mustafadaniyal7@gmail.com">
                <MagicButton 
                title="Let's get in touch"
                icon = {<FaLocationArrow />}
                position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-col flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Daniyaal</p>

            <div className='flex items-center justify-center md:gap-3 gap-6'>
                {socialMedia.map((profile)=>(
                    <div key={profile.id} className='w-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity075 bg-black-200 rounded-lg border border-black-300'>
                        <img src={profile.img} alt={profile.img} width={20} height={20} />
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer