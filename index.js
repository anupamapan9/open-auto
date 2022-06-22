const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const uri = "mongodb+srv://vocally:1w33fjwxjdPEG20i@cluster0.f4xqs.mongodb.net/?retryWrites=true&w=majority";

const cors = require('cors');
// middle wares ------------------- 
app.use(cors())
app.use(express.json())


const { MongoClient, ServerApiVersion } = require('mongodb');
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();

        const userCollection = client.db("vocallyUser").collection("user")

        app.post('/users', async (req, res) => {
            const users = req.body;
            const result = await userCollection.insertOne(users)
            res.send(result)
        })


    } finally {

    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// user :vocally
// password : 1w33fjwxjdPEG20i