import React from 'react'
import Container from '../Layoutitems/Container'
import List from '../Layoutitems/List'
import Listitems from '../Layoutitems/Listitems'
import Flex from '../Layoutitems/Flex'
import logo from '../../assets/logo.png'
import {FaAngleDown} from 'react-icons/fa'
import {FaAngleRight} from 'react-icons/fa'

const Navbar = ({className}) => {
  return (
    <div className={className}>
        <Container className='pt-6'>
            <Flex className='items-center justify-between'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <List className='flex gap-x-16 text-white text-lg font-IBM font-bold  '>
                        <Listitems className='hover:text-primary duration-300' itemName='Home'/>
                        <Listitems className='hover:text-primary duration-300' itemName='About Us'/>
                        <Listitems className='hover:text-primary duration-300' itemName='Activities'><FaAngleDown className='text-white inline-block'/></Listitems>
                        <Listitems className='hover:text-primary duration-300' itemName='Latest News'/>
                        <Listitems className='hover:text-primary duration-300' itemName='Contact'/>
                    </List>
                </div>
                <div>
                    <button className='py-5 px-[51px] text-white bg-primary rounded-[10px] font-bold font-IBM'>Get Started <FaAngleRight className='text-white inline-block'/></button>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Navbar