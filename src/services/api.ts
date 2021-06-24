import axios, { AxiosInstance } from 'axios'

class Api {
    public instance: AxiosInstance

    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:3333'
        })
    }
}

export default new Api().instance
