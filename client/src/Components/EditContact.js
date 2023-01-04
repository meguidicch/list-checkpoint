import { useEffect, useState } from "react"
import { Form, Button} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getonecontact, updateContact } from "../Redux/Actions/ContactActions"

const EditContact=()=>{
const {id} = useParams()
  const [name,setName] = useState(oneContact.name)
  const [age,setAge] = useState(oneContact.age)
  const [email,setEmail] = useState(oneContact.email)
  useEffect=(()=>{
      setName(oneContact.name)
      setAge(oneContact.Age)
      setEmail(oneContact.Email)
  },[oneContact])
   const navigate = useNavigate()
   const handlEdit=(a)=>{
    a.preventDefault(updateContact({name,age,email},id,navigate))

   }
  const dispatch = useDispatch()
  useEffect(()=>{
         dispatch(getonecontact(id))
  },[])
  const oneContact = useSelector(state=>state.ContactReducer.oneContact)
  
  return(
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control value={Age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter age" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={Email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
      </Form.Group>
      
      <Button onClick={(e)=>handlEdit(e)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default EditContact