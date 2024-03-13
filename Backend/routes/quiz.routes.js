const express = require('express');
const router =  express.Router();
const quizscore = require('../controllers/quiz');

router.use('/quiz/submit',quizscore);

module.exports = router;