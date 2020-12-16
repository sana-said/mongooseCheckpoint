const mongoose = require('mongoose')
const schema = mongoose.schema

const PersonSchema = new schema({
    name : {type:string ,required: true},
    age : {type :number},
    favoriteFoods : {type :[string]}
})
module.exports = Person = mongoose.model('Person',PersonSchema)//'Person' is the collection name
