const mongoose = require('mongoose')

mongoose.set('strictQuery', true);

const ConnectDB=async()=>{
    try {
        await mongoose.connect(process.env.URI)
        console.log('DB is connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = ConnectDB