const express = require('express')
const { addContact, readContacts, deleteContacts, updateContact, readContact } = require('../Controllers/Contact')


const contactRouter = express.Router()

contactRouter.post('/addContact',addContact)

contactRouter.get('/readContacts',readContacts)

contactRouter.delete('/deleteContact/:id',deleteContacts)

contactRouter.put('/updataContact/:id',updateContact)

contactRouter.get('/readUser/:id',readContact)  

module.exports = contactRouter