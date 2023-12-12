import { serverUrl } from "../config"

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
