import axios from "axios"

const apiEndPoint = 'https://65802bc16ae0629a3f5487a6.mockapi.io/task/v1/'

export const getAllCard = async ()=>{
    return await axios.get(`${apiEndPoint}Job`) 
}
export const addNewCard = async (data)=>{
    return await axios.post(`${apiEndPoint}Job`,data) 
}
export const deleteCard = async (id)=>{
    return await axios.delete(`${apiEndPoint}Job/${id}`) 
}