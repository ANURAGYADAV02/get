import React, { useState } from 'react'
import { createContext } from 'react'
export const Context_U=createContext();
const UserC = ({children}) => {
const [showCard,setshowCard]=useState(false)
  return (
    <div>
        <Context_U.Provider value={{showCard,setshowCard}}>
            {children}
        </Context_U.Provider>
    </div>
  )
}

export default UserC