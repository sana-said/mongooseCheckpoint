const mongoose = require ('mongoose')
const config = require ('config')


const connectDB = () => {
    mongoose.connect( config.get('MONGOURI'),{useUnifiedTopology: true,useNewUrlParser: true})
    .then(() => console.log("DB is connected..."))
    .catch((err)=>console.log(err.message))
}
module.exports = connectDB