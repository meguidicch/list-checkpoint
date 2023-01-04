import { GET_CONTACTS, GET_ONE_CONTACT} from "../ActionTypes/ContactTypes"

const initialState={
    contacts : [],
    oneContact :{}
}

const ContactReducer=(state = initialState,action)=>{
    switch (action.type) {
      case GET_ONE_CONTACT : return {...state,oneContact : action.payload}
      case GET_CONTACTS : return {...state, contacts : action.payload}
      default : return state
    }
}

export default ContactReducer