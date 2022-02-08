import axios from "axios"

export const GetTodo = () => async dispatch => {
   
    try{
        const response = await axios.get("https://5d36d86c86300e0014b647c7.mockapi.io/users")
            dispatch({
                type:"GET_TODO",
                payload: response.data
            })
    }catch (error) {
        console.log("loi")
    }
}

export const ADDtodo = (list) => async dispatch =>{
    try {
        const reponse = await axios.post("https://5d36d86c86300e0014b647c7.mockapi.io/users",list)
        dispatch({
            type:"ADD_TODO",
            payload:list
        })
    } catch (error) {
        console.log('loi')
    }
} 

export const EditAction = (list) => async dispatch =>{
    try {
       const res = await axios.put(`https://5d36d86c86300e0014b647c7.mockapi.io/users/${list.id}`,list)
     
        dispatch({
            type:"EDIT_TODO",
            payload: res.data
        })
    } catch (error) {
        console.log("ok")

    }
}

export const Delete = (id) => async dispatch =>{
    try {
        const res = await axios.delete(`https://5d36d86c86300e0014b647c7.mockapi.io/users/${id}`)
        dispatch({
            type:"DELETE_TODO",
            payload:res.data
        })
    } catch (error) {
        console.log('loi')
    }
}
