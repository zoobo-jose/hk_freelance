export const Sectors=[
    {
        _id:0,
        name:"sector 0"
    },
    {
        _id:1,
        name:"sector 1"
    },
]
export const SubSectors=[
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
