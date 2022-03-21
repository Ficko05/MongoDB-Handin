const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors');

const testmoduel = require("./models/Test")

app.use(express.json());
app.use(cors());


//mongoose.connect('mongodb+srv://new-user:admin123@cluster0.g7szi.mongodb.net/ass-3?retryWrites=true&w=majority',{
mongoose.connect('mongodb://localhost:27017/twitter', {
    //mongoose.connect('mongodb://localhost:26061/mydb',{
    useNewUrlParser: true,
})


app.get('/', async (req, res) => {
    const tester = new testmoduel({ tweet: "testNew" })
    try {
        await tester.save()
    } catch (err) {
        console.log(err)
    }

})


app.get('/agg', async (req, res) => {
    testmoduel.aggregate([{ $group: { _id: "tweet", count: { $sum: 1 } } }], (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)

    })
})



app.get('/read', async (req, res) => {
    testmoduel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    }
    )
})


app.post('/insert', async (req) => {

    const tweet = req.body.tweetToSend
    //console.log("THIs is the tweet you are sending " + tweet + "////" )
    //const tester = new testmoduel({first_name: "test", last_name: "  test"})
    const DataTweet = new testmoduel({ tweet: tweet })

    console.log(DataTweet)

    try {
        // await tester.save()
        await DataTweet.save()
    } catch (err) {
        console.log(err)

    }

})

app.listen(3001, () => {
    console.log("server running on 3001")
})