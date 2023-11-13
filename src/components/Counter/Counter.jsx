import React from 'react'
import Container from '../Layoutitems/Container'
import Flex from '../Layoutitems/Flex'

const Counter = () => {
  return (
    <div className='bg-[#FDFEFD]'>
        <Container className='pt-[124px] pb-[105px]'>
            <Flex className='gap-x-6'>
                <div className=' bg-[#FFF4E5]'>
                    <div className='bg-counterBgImg pt-[38px] pb-[49px] px-[84px] text-center'>
                        <h3 className='text-black font-bold font-IBM text-[80px]'>10+</h3>
                        <p className='text-black text-lg font-IBM'>Sports Activities</p>
                    </div>
                </div>
                <div className=' bg-[#E7FDE9]'>
                    <div className='bg-counterBgImg pt-[38px] pb-[49px] px-[84px] text-center'>
                        <h3 className='text-black font-bold font-IBM text-[80px]'>3k+</h3>
                        <p className='text-black text-lg font-IBM w-[186px]'>Registered Enthusiasts</p>
                    </div>
                </div>
                <div className=' bg-[#F2F2FD]'>
                    <div className='bg-counterBgImg pt-[38px] pb-[49px] px-[84px] text-center'>
                        <h3 className='text-black font-bold font-IBM text-[80px]'>15+</h3>
                        <p className='text-black text-lg font-IBM w-[159px]'>Years of Experience</p>
                    </div>
                </div>
                <div className=' bg-[#FDF1F5]'>
                    <div className='bg-counterBgImg pt-[38px] pb-[49px] px-[84px] text-center'>
                        <h3 className='text-black font-bold font-IBM text-[80px]'>9.5</h3>
                        <p className='text-black text-lg font-IBM w-[121px]'>Average Rating</p>
                    </div>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Counter