import { serverUrl } from "../config"


export function getSectors() {
    return fetch(serverUrl + "/sectors")
        .then(response => response.json())
}
export function getSubSetors() {
    return fetch(serverUrl + "/subsectors")
        .then(response => response.json());
}
