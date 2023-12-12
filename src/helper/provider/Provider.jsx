import {  useEffect } from "react"
import { useState } from "react"
import { Context } from "../context/context"
import { getSectors ,getSubSetors} from "../api/sector"
import { saveUser ,updateUser,getUserByName} from "../api/user";


export const Provider = (props) => {
    const { children }=props;
    const [client, setClient] = useState();
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
   const subsectorsOf=(sector)=>{
        const tab = subSectors.filter((sub) => { return sub.type == sector._id })
        return tab;
    }
    const getSubSector=(idSub)=> {
        const tab = subSectors.filter((sub) => { return sub._id == idSub })
        return tab[0];
    }
    const getSector=(idSub)=> {
        const tab = sectors.filter((sub) => { return sub._id == idSub })
        return tab[0];
    }
    const saveClient=(client)=>{
        return saveUser(client);
    }
    const updateClient=(client)=>{
        return updateUser(client);
    }
    const getClientByName=(client)=>{
        return getUserByName(client).then((user)=>{
            console.log(user);
            setClient(user);
            return user;
        })
    }
    const verify = (user) => {
        let message="";
        let response=true;
        if (user.name.length <= 0) {
            message="Please enter your name";
            response=false;
        } else
            if (!user.agree) {
                message="Please agree to terms";
                response=false;
            }
            else
            if (user.sector.length <= 0) {
                message="Please give your sector";
                response=false;
            }
        return {
            message:message,
            response:response
        };
    }
    return (
        <Context.Provider value={
            { client, setClient ,subSectors,sectors,subsectorsOf,getSubSector,getSector,saveClient,updateClient,verify,getClientByName}
            }>
            {children}
        </Context.Provider>
    )
}