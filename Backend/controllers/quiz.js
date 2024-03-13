const quiz = require('../models/quiz');

const quizscore = async(req,res)=>{
    const {score, userid} = req.body;
    try {
        const isUser = await quiz.findOne({
            userid
        });
        if(isUser){
            const updateScore = await quiz.findByIdAndUpdate({
                _id: isUser._id
            },{
                score
            });
            return res.status(200).json({updateScore});
        }
        const userScore = await quiz.create({
            score,
            userid
        });
        userScore.save();
        return res.status(200).json({userScore});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Internal server error"});
    }
}

module.exports = { quizscore }