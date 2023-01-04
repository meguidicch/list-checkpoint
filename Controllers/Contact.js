const Contact = require("../Models/Contact")

exports.addContact=async(req,res)=>{
    try {
        const found = await Contact.findOne({email : req.body.email})

        if(found){
            return res.status(400).send('Contact already exists')
        }
        const newContact = new Contact(req.body)
        await newContact.save()
        res.status(200).send({Msg : 'Contact added',newContact})
    } catch (error) {
        res.status(500).send('Could not add contact')
    }
}

exports.readContacts=async(req,res)=>{
    try {
        const contacts = await Contact.find()
        res.status(200).send({Msg : "List of contacts",contacts})
    } catch (error) {
        res.status(500).send('Could not find contacts')
    }
}

exports.deleteContacts=async(req,res)=>{
    try {
        const {id} = req.params

        await Contact.findByIdAndDelete(id)
        res.status(200).send({Msg : 'Contact deleted'})
    } catch (error) {
        res.status(500).send('Could not delete contact')
    }
}

exports.updateContact=async(req,res)=>{
    try {
        const {id} = req.params
        await Contact.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({Msg : "Contact updated"})
    } catch (error) {
        res.status(500).send('Could not update contact')
    }
}

exports.readContact=async(req,res)=>{
    try {
        const {id} = req.params
        const found = await Contact.findById(id)
        res.status(200).send({Msg : 'Contact founded',found})
    } catch (error) {
        res.status(500).send('Could not find contact')
    }
}