const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://manaviarora01:oWs3XNmsfAPJbsPt@cluster0.gpxml8r.mongodb.net/Hackathon')

const quizScoreSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'User Id is required']
    },
    score: {
        type: Number,
    }
})

const QuizScore = mongoose.model('QuizScore', quizScoreSchema);

module.exports = QuizScore;