import React from 'react'
import Container from '../Layoutitems/Container'
import Flex from '../Layoutitems/Flex'
import activityImg from '../../assets/activityImg.png'
import activityImgTwo from '../../assets/activityImgTwo.jpg'
import activityImgThree from '../../assets/activityImgThree.jpg'
import activityImgFour from '../../assets/activityImgFour.jpg'
import activityImgFive from '../../assets/activityImgFive.jpg'
import activityImgSix from '../../assets/activityImgSix.jpg'

const Activity = () => {
  return (
    <div className='bg-secondary'>
        <Container className='pt-[110px] pb-[77px]'>
            <Flex className='items-center'>
                <div className='w-1/2'>
                    <h4 className='font-tail text-primary text-3xl'>Feel The Excitement</h4>
                    <h2 className='font-bold font-IBM text-white text-[54px]'>Extreme Sports<span className='block'>Activities</span></h2>
                </div>
                <div className='w-1/2'>
                <p className='font-IBM text-white text-lg w-[634px]'>Dolor sit amet consectetur adipiscing elits eiusmod tempor incididunts laboreyse dolore mag aliqua. Quis ipsum supendise ultrices gravid. Risus commodo viverra sed ipsum maecenas.</p>
                </div>
            </Flex>
            <div className='border-b-2 border-[#A0A0A0] w-[100px] mt-[41px] mb-[70px]'></div>
            <div>
                <Flex className='gap-x-[30px]'>
                    <div className='bg-[#0F4152] text-center rounded-[10px]'>
                        <img src={activityImg} alt="" />
                        <h5 className='text-white font-IBM font-bold text-3xl mt-[32px]'>Mountain Biking</h5>
                        <p className='text-white font-IBM  text-lg mb-[32px]'>Dolor sit amet magna</p>
                    </div>
                    <div className='bg-[#0F4152] text-center rounded-[10px]'>
                        <img className='rounded-t-[10px]' src={activityImgTwo} alt="" />
                        <h5 className='text-white font-IBM font-bold text-3xl mt-[32px]'>Snow Sports</h5>
                        <p className='text-white font-IBM  text-lg mb-[32px]'>Dolor sit amet magna</p>
                    </div>
                    <div className='bg-[#0F4152] text-center rounded-[10px]'>
                        <img className='rounded-t-[10px]' src={activityImgThree} alt="" />
                        <h5 className='text-white font-IBM font-bold text-3xl mt-[32px]'>Surfing</h5>
                        <p className='text-white font-IBM  text-lg mb-[32px]'>Dolor sit amet magna</p>
                    </div>
                </Flex>
                <Flex className='gap-x-[30px] mt-12'>
                    <div className='bg-[#0F4152] text-center rounded-[10px]'>
                        <img className='rounded-t-[10px]' src={activityImgFour} alt="" />
                        <h5 className='text-white font-IBM font-bold text-3xl mt-[32px]'>Skateboarding</h5>
                        <p className='text-white font-IBM  text-lg mb-[32px]'>Dolor sit amet magna</p>
                    </div>
                    <div className='bg-[#0F4152] text-center rounded-[10px]'>
                        <img className='rounded-t-[10px]' src={activityImgFive} alt="" />
                        <h5 className='text-white font-IBM font-bold text-3xl mt-[32px]'>Jet Skiing</h5>
                        <p className='text-white font-IBM  text-lg mb-[32px]'>Dolor sit amet magna</p>
                    </div>
                    <div className='bg-[#0F4152] text-center rounded-[10px]'>
                        <img className='rounded-t-[10px]' src={activityImgSix} alt="" />
                        <h5 className='text-white font-IBM font-bold text-3xl mt-[32px]'>Ice Climbing</h5>
                        <p className='text-white font-IBM  text-lg mb-[32px]'>Dolor sit amet magna</p>
                    </div>
                </Flex>
            </div>
        </Container>
    </div>
  )
}

export default Activity