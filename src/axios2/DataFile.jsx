import axios from "axios";

const AllApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const Info = () => {
    return AllApi.get('/comments')
}

export const deletePost = (id) => {
    return AllApi.delete(`/comments/${id}`)
}

export const AddData = (data) => {
    return AllApi.post('/comments', data)
}