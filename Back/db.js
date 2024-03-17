const mongoose = require('mongoose');
const mongo= ()=>{
    mongoose.connect('mongodb+srv://manaviarora01:oWs3XNmsfAPJbsPt@cluster0.gpxml8r.mongodb.net/db').then(()=>console.log("db Connected")).catch((err)=>console.log(err))
}
module.exports = mongo;