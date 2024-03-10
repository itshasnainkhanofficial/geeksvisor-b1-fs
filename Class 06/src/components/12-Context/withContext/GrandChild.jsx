import React, { useContext } from 'react'
import { Username } from './UserContext'

const GrandChild = () => {
    const username = useContext(Username)
  return (
    <div>
        My name is {username}
    </div>
  )
}

export default GrandChild