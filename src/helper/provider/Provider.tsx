import { ReactNode, useEffect } from "react"
import { useState } from "react"
import { Context } from "../context/context"
import { getSectors ,getSubSetors} from "../sector"
interface Props{
    children:ReactNode
}

export const Provider = ({ children }:Props) => {

    const [client, setClient] = useState( {
        name:"",
        sector:0,
        agree:false
    });
    const [sectors, setSectors] = useState([]);
    const [subSectors, setSubSectors] = useState([]);
    useEffect(()=>{
        getSectors().then((sectors)=>{
            setSectors(sectors);
        })
        getSubSetors().then((subsectors)=>{
            setSubSectors(subsectors);
        })
    },[])
   const subsectorsOf=(sector: Sector)=>{
        const tab = subSectors.filter((sub) => { return sub.type == sector._id })
        return tab;
    }
    const getSubSector=(idSub: number)=> {
        const tab = subSectors.filter((sub) => { return sub._id == idSub })
        return tab[0];
    }
    const getSector=(idSub: number)=> {
        const tab = sectors.filter((sub) => { return sub._id == idSub })
        return tab[0];
    }
    return (
        <Context.Provider value={
            { client, setClient ,subSectors,sectors,subsectorsOf,getSubSector,getSector}
            }>
            {children}
        </Context.Provider>
    )
}