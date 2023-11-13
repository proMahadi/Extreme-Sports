import React from 'react'
import Container from '../Layoutitems/Container'
import Flex from '../Layoutitems/Flex'
import ExtremeLogo from '../../assets/ExtremeLogo.png'
import extremeVdoOne from '../../assets/extremeVdoOne.png'
import extremeVdoTwo from '../../assets/extremeVdoTwo.png'
import extremeVdoThree from '../../assets/extremeVdoThree.png'
import {AiFillRightCircle} from 'react-icons/ai'

const Extreme = () => {
  return (
    <div className='bg-primary relative'>
        <Container className='pt-[100px] pb-[475px]'>
            <div>
                <img className='mx-auto' src={ExtremeLogo} alt="" />
            </div>
            <div className='text-center'>
                <h3 className='text-white font-IBM font-bold text-[54px] mt-[29px] mb-[50px]'>Extreme Sports Will Test Your Limits and Push The Boundaries to The Max</h3>
                <p className='text-white font-bold font-IBM text-3xl'>Be Prepared To Experience The New Adventures</p>
            </div>
                <Flex className='justify-center mt-[57px]'>
                    <button className='py-5 px-10 bg-secondary rounded-[10px] text-white text-lg font-bold font-IBM mr-[46px]'>Join Our Club</button>
                    <button className='py-5 px-8 border-2  rounded-[10px] text-white font-IBM font-bold text-lg'>View The Demo</button>
                </Flex>



                <div className='absolute bottom-[-70px]'>
                    <Flex className='gap-x-[27px]'>
                        <div className='relative'>
                            <img src={extremeVdoOne} alt="" />
                            <div className='absolute top-0 pt-[224px] pr-[113px] pl-[20px] pb-[41px] text-white  bg-transparent'>
                                <h3 className='text-white font-IBM text-[40px] font-bold'>Sports Videos</h3>
                                <h5 className='text-white font-IBM text-[28px] font-semibold'>Get Inspired</h5>
                                <div className='border-b-2 border-[#A0A0A0] w-[288px] mt-[32px] mb-[23px]'></div>
                                <Flex className='items-center'>
                                    <p className='text-white font-IBM text-base'>Dolor sit amet magna</p>
                                    <AiFillRightCircle className='text-2xl ml-5'/>
                                </Flex>
                            </div>
                        </div>
                        <div className='relative'>
                            <img src={extremeVdoTwo} alt="" />
                            <div className='absolute top-[-62px] pt-[224px] pr-[113px] pl-[20px] pb-[41px] text-white  bg-transparent'>
                                <h3 className='text-white font-IBM text-[40px] font-bold'>Club <span className='block'>Activities</span></h3>
                                <h5 className='text-white font-IBM text-[28px] font-semibold'>View All Sports</h5>
                                <div className='border-b-2 border-[#A0A0A0] w-[288px] mt-[32px] mb-[23px]'></div>
                                <Flex className='items-center'>
                                    <p className='text-white font-IBM text-base'>Dolor sit amet magna</p>
                                    <AiFillRightCircle className='text-2xl ml-5'/>
                                </Flex>
                            </div>
                        </div>
                        <div className='relative'>
                            <img src={extremeVdoThree} alt="" />
                            <div className='absolute top-[-62px] pt-[224px] pr-[113px] pl-[20px] pb-[41px] text-white  bg-transparent'>
                                <h3 className='text-white font-IBM text-[40px] font-bold'>Meet Our <span className='block'>Team</span></h3>
                                <h5 className='text-white font-IBM text-[28px] font-semibold'>The Instructors</h5>
                                <div className='border-b-2 border-[#A0A0A0] w-[288px] mt-[32px] mb-[23px]'></div>
                                <Flex className='items-center'>
                                    <p className='text-white font-IBM text-base'>Dolor sit amet magna</p>
                                    <AiFillRightCircle className='text-2xl ml-5'/>
                                </Flex>
                            </div>
                        </div>
                    </Flex>
                </div>
        </Container>
    </div>
  )
}

export default Extreme