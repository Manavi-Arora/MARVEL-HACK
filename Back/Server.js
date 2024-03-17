const express = require('express')
const bodyParser = require('body-parser')
const cors =require('cors');
const app = express();
const mongo = require('./db')
const Lboard = require('./Models/LeaderBoard')

const corsOptions = {
    origin: `http://127.0.0.1:5501`,
    credentials: true,
    methods: ['GET', "POST", "DELETE"]
}

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors(corsOptions));
mongo();
app.use(express.json());

app.post('/leaderboard', async(req, res)=>{
    const {user, score} = req.body;
    try{
        console.log(user, score);
        const board = new Lboard({Name: user, Score: score});
        board.save();
    }
    catch(err){
        console.log(err)
    }
})

app.get('/', (req, res)=>{
    res.send("hello")
})

app.listen(4000, ()=>{
    console.log("Port Connected")
})

