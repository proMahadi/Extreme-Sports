import React, { Children } from 'react'

const Listitems = ({className,itemName,children}) => {
  return (
    <li className={className}>{itemName}{children}</li>
  )
}

export default Listitems