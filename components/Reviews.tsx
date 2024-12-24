import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { Quote } from 'lucide-react'
import { testimonials } from '@/data'

const Reviews = () => {
  return (
    <div className='py-20' id='testimonials'>
        <h1 className='heading'>
            See what my  <span className='text-purple'>friends</span> have to say about it
            
        </h1>
        <div className='flex flex-col items-center max-lg:mt-12'>
            

            <InfiniteMovingCards 
            items={
                testimonials
            }
            direction='right'
            speed='slow'
            />
            
            
        </div>

    </div>
  )
}

export default Reviews