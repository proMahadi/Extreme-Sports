import React from 'react'
import Container from '../Layoutitems/Container'
import Flex from '../Layoutitems/Flex'
import {BsCheckCircleFill} from 'react-icons/bs'
import adventureImgOne from '../../assets/adventureImgOne.png'
import adventureImgTwo from '../../assets/adventureImgTwo.png'

const Join = () => {
  return (
    <div className='bg-[#FDFEFD]'>
        <Container className='py-[123px]'>
            <Flex className='gap-x-[74px]'>
                <div className='w-1/2'>
                    <h4 className='font-tail text-[#7EBDF1] text-3xl'>
                    Feel The Excitement
                    </h4>
                    <h2 className='font-bold font-IBM text-black text-[54px]'>
                    Join Us And Embark On <span className='block'>New Adventures</span>
                    </h2>
                    <div className='border-b-2 border-[#A0A0A0] w-[100px] mt-[72px] mb-[86px]'></div>
                    <div>
                        <p className='font-IBM text-[#4C4522] text-lg'>Dolor sit amet consectetur adipiscing elits eiusmod tempor incididunts laboreyse dolore mag aliqua. Quis ipsum supendise ultrices gravid. Risus commodo viverra sed ipsum maecenas.</p>
                        <div className='mt-[51px] mb-[54px]'>
                            <Flex className='items-center gap-x-[18px]'>
                                <div className='h-8 w-8 bg-[#C4C4C4] flex justify-center items-center rounded-full '><BsCheckCircleFill/></div>
                                <p className='font-IBM text-[#4C4522] text-lg'>Unde omnis iste natus error sit voluptatem dolore</p>
                            </Flex>
                            <Flex className='items-center gap-x-[18px] my-[22px]'>
                                <div className='h-8 w-8 bg-[#C4C4C4] flex justify-center items-center rounded-full '><BsCheckCircleFill/></div>
                                <p className='font-IBM text-[#4C4522] text-lg'>Unde omnis iste natus error sit voluptatem dolore</p>
                            </Flex>
                            <Flex className='items-center gap-x-[18px]'>
                                <div className='h-8 w-8 bg-[#C4C4C4] flex justify-center items-center rounded-full '><BsCheckCircleFill/></div>
                                <p className='font-IBM text-[#4C4522] text-lg'>Unde omnis iste natus error sit voluptatem dolore</p>
                            </Flex>
                        </div>
                        <div>
                            <button className='px-14 py-[18px] bg-primary rounded-[10px] text-white text-lg font-bold font-IBM'>Discover More</button>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <Flex className='gap-x-6 items-center'>
                        <img src={adventureImgOne} alt="adventureImgOne" />
                        <img className='h-auto' src={adventureImgTwo} alt="adventureImgOne" />
                    </Flex>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Join