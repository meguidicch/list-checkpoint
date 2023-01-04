import { GET_CONTACTS, GET_ONE_CONTACT } from "../ActionTypes/ContactTypes"
import axios from 'axios'
export const getContacts=()=>async(dispatch)=>{
    try {
     const res = await axios.get('/api/Contact/readContacts')
    dispatch({
        type : GET_CONTACTS,
        payload : res.data.contacts
    })

    }catch(error) {
        console.log(error)
    }
}

export const addContact=(newUser,navigate)=>async(dispatch)=>{
    console.log(newUser)
    try {
       await axios.post('/api/Contact/addContact',newUser)
       dispatch(getContacts())
      navigate('/listContacts')
    }catch(error){
        console.log(error)
    }
}
export const deleteUser=(id)=>async(dispatch)=>{
   try{
     await axios.delete(`/api/Contact/deleteContact/${id}`)
     dispatch(getContacts())
   }catch(error){
    console.log(error)
   }
}

export const getonecontact=(id)=>async(dispatch)=>{
  try{
      const res = await axios.get(`/api/Contact/readUser/${id}`)
      dispatch({
        type : GET_ONE_CONTACT,
        payload : res.data.found
      })
  }catch(error){
    console.log(error)
  }
}

export const updateContact=(upUser,id,navigate)=>async(dispatch)=>{
     try{
        await axios.put(`/api/Contact/updataContact/${id}`,upUser)
        dispatch(getContacts())
        navigate('/listContacts')
     }catch(error){
        console.log(error)
     }
}

