const express = require('express')
const mongoose = require('mongoose')
const app = express()

const testmoduel = require("./models/Test")

app.use(express.json())

mongoose.connect('mongodb+srv://new-user:admin123@cluster0.g7szi.mongodb.net/ass-3?retryWrites=true&w=majority',{
    useNewUrlParser: true,
}) 


app.get('/', async(req, res) => {
    const tester = new testmoduel({fname: "stuff", lname: "stuffer"})

    try{
        await tester.save()
    }catch(err){
        console.log(err)

    }

} ) 

app.listen(3001, ()=> {
    console.log("server running on 3001")
})