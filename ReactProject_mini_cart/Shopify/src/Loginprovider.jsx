import React, { useState } from 'react'
import { createContext } from 'react'

export const Logincontext = createContext();
function Loginprovider({ children }) {

    const [logged, setlogged] = useState(false);

    return (
        <Logincontext.Provider value={{ logged, setlogged }}>
            {children}
        </Logincontext.Provider>
    )
}

export default Loginprovider
