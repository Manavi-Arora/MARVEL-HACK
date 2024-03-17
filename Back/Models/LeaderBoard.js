const mongoose = require('mongoose')
const { Schema } = mongoose;

const board = new Schema ({
    Name: {
        type: String,
    },
    Score: {
        type: String,
    }
})

const boardModel = mongoose.model("leaderBoard", board);

module.exports = boardModel