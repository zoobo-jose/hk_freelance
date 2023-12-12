import { serverUrl } from "../config";


export function saveUser(user) {
    return fetch(serverUrl+"/user/create", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body:JSON.stringify(user)
      })
    .then(response => response.json())
}

export function updateUser(user) {
    return fetch(serverUrl+"/user/update", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body:JSON.stringify(user)
      })
    .then(response => response.json())
}
export function getUserByName(user) {
    console.log(user)
    return fetch(serverUrl+"/user/byName", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body:JSON.stringify(user)
      })
    .then(response => response.json())
}