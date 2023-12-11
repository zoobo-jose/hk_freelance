import { serverUrl } from "./config"
export let Sectors = [
    {
        _id: 0,
        name: "sector 0"
    },
    {
        _id: 1,
        name: "sector 1"
    },
]
export let SubSectors = [
    {
        _id: 0,
        name: "sub sector 1",
        type: 0,
    },
    {
        _id: 1,
        name: "sub sector 2",
        type: 0,
    },
    {
        _id: 2,
        name: "sub sector 3",
        type: 1,
    }
]
export type Sector = {
    _id: number,
    name: string
}
export type SubSector = {
    _id: number,
    name: string,
    type: number
}

export function getSectors() {
    return fetch(serverUrl + "/sectors")
        .then(response => response.json())
}
export function getSubSetors() {
    return fetch(serverUrl + "/subsectors")
        .then(response => response.json());
}
