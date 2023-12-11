import { ReactNode } from "react"
import { useState } from "react"
import { Context } from "../context/context"
interface Props{
    children:ReactNode
}

export const Provider = ({ children }:Props) => {

    const [client, setClient] = useState( {
        name:"",
        sector:0,
        agree:false
    });
    
    return (
        <Context.Provider value={{ client, setClient }}>
            {children}
        </Context.Provider>
    )
}