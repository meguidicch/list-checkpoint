import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getContacts } from '../Redux/Actions/ContactActions'
import CardContact from './CardContact'
const ListContact=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getContacts())
    },[])
    const contacts = useSelector(state => state.ContactReducer.contacts )
    return(
        <div>
          {
            contacts.map(el => <CardContact el={el}/>)
          }
        </div>
    )
}
export default ListContact