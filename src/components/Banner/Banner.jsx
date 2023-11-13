import React from 'react'
import Container from '../Layoutitems/Container'
import Flex from '../Layoutitems/Flex'


const Banner = ({className}) => {
  return (
    <div className={`bg-banner bg-center bg-cover bg-no-repeat ${className}`}>
        <Container className='pt-60 pb-[218px]'>
            <div className='text-center'>
                <div>
                    <h1 className='font-bold text-white font-IBM text-7xl'>Experience the spirit of <span className='block'>adventure sports</span></h1>
                </div>
                <Flex className='justify-center gap-x-4 mt-11'>
                    <button className='py-5 px-10 bg-primary rounded-[10px] text-white font-bold font-IBM hover:bg-white hover:text-black duration-300'>Explore Activities</button>
                    <button className='py-5 px-10 bg-primary rounded-[10px] text-white font-bold font-IBM hover:bg-white hover:text-black duration-300'>Who We Are</button>
                </Flex>
            </div>
        </Container>
            <div className='bg-bannerVector h-[65px] w-full  w-full'></div>
    </div>
  )
}

export default Banner