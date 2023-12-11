import { serverUrl } from "./config"
export let Sectors=[
    {
        _id:0,
        name:"sector 0"
    },
    {
        _id:1,
        name:"sector 1"
    },
]
export let SubSectors=[
    {
        _id:0,
        name:"sub sector 1",
        type:0,
    },
    {
        _id:1,
        name:"sub sector 2",
        type:0,
    },
    {
        _id:2,
        name:"sub sector 3",
        type:1,
    }
]
export type Sector={
    _id:number,
    name:string
}
export type SubSector={
    _id:number,
    name:string,
    type:number
}
export function subsectorsOf(sector:Sector){
    const tab = SubSectors.filter((sub)=>{return sub.type==sector._id})
    return tab;
}
export function getSubSector(idSub:number){
    const tab = SubSectors.filter((sub)=>{return sub._id==idSub})
    return tab[0];
}
export function getSector(idSub:number){
    const tab = Sectors.filter((sub)=>{return sub._id==idSub})
    return tab[0];
}
export function getSetors(){
    return fetch(serverUrl+"/sectors")
    .then(response => response.json())
    .then(response => {
        Sectors=response;
    })
    .catch(error => alert("Erreur : " + error));
}
export function getSubSetors(){
    return fetch(serverUrl+"/subsectors")
    .then(response => response.json())
    .then(response => {
        SubSectors=response;
    })
    .catch(error => alert("Erreur : " + error));
}
getSetors();
getSubSetors();

