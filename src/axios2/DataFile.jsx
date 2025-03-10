import axios from "axios";

const AllApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const Info = () => {
    return AllApi.get('/comments')
}