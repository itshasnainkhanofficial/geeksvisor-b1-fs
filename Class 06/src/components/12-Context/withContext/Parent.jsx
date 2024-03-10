import React from 'react'
import { Username } from './UserContext'
import Child from './Child'

const Parent = () => {
  return (
    <Username.Provider value='hasnain'>
      <Child/>
    </Username.Provider>
  )
}

export default Parent