import axios from "axios";

export default class Service {
    constructor(){
        state: {
            data:[]
        }
        baseURL = "https://62423a5cb6734894c14e79ee.mockapi.io/music"
    }
    get(){
        return axios.get(`${baseURL}`)
        .then(res => this.state.data = res.data)
        .catch(error => console.error(error))
    }

    getById(id){
        return axios.get(`${baseURL}`/`${id}`)
        .then(res => this.state.data = res.data)
        .catch(error => console.error(error))
    }
}