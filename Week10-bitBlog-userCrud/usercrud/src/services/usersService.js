import { User } from '../entities/User';

export const getUsers = () => {
    let url = "https://jsonplaceholder.typicode.com/users";

    return fetch(url)
        .then(response => response.json())
        .then((apiUsers) => {
            return apiUsers.map((oneUser) => {
                return new User(oneUser.id, oneUser.name, oneUser.email, oneUser.address.city)
            })
        })
}

export const getUser = (id) => {
    let url = "https://jsonplaceholder.typicode.com/users/" + id;

    return fetch(url)
        .then(response => response.json())
        .then((apiUser) => {

            return new User(apiUser.id, apiUser.name, apiUser.email, apiUser.address.city)
        })
}

export const sendValidatedData = (data) => {
    const apiData = JSON.stringify(data)
    let url = "https://jsonplaceholder.typicode.com/users/";

    return fetch(url, {
        method: "POST",
        body: apiData
    })
}

export const fetchDeleteUser = (userId) => {
    let url = "https://jsonplaceholder.typicode.com/users/" + userId;
    return fetch(url, {
        method: "DELETE"
    })
}   