const express = require('express')
const router = express.Router()
const Person = require('../models/Person')

// test
router.get('/', (req, res) => {
    res.send('tested')
})

// Route Create New Person
router.post('/addPerson', (req, res) => {
    const { name, age, favoriteFoods } = req.body //Distructuring
    const newPerson = new Person ({name,age,favoriteFoods})
    newPerson.save()
    .then(persons => res.json(persons))
    .catch(err => console.log(err.message))
})

// Route Get All Person
router.get('/allPerson' , (req,res) =>{
    Person.find()
    .then(persons => res.json(persons))
    .catch(err => console.log(err.message))
})
//Route Get One Person By Id
router.get('/person/:id' ,(req,res) =>{
    Person.findById(req.params.id)
    .then(persons => res.json(persons))
    .catch(err => console.log(err.message))
})

//Route Delete Person
router.delete('/deletePerson/:id' , (req,res) =>{
    Person.findByIdAndDelete(req.params.id)
    .then (() => res.json ({msg: 'Person Deleted'}))
    .catch(err => console.log(err.message))

})

//Route  Update  Person
router.put('/updatePerson/:id', (req,res) =>{
    Person.findByIdAndUpdate(req.params.id, {$set: {...req.body}},(err, data) =>{
        if (err) {throw err}
        Person.findById(req.params.id)
        .then(person => res.json (person))
        .catch(err => console.log(err.message))
    })
})


module.exports = router