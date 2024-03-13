const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Shivam:itsbeens0long@cluster0.ezyirm3.mongodb.net/Hackathon')

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