var express = require('express');
var router = express.Router();

router.get('/signup', (req, res) =>{
    const result = {
        status = 200, 
        messsage = 'signUp'

    }
    res.status(200).send(result);
});

router.get('/login', (req, res) => {
    const result = {
        status = 200, 
        message = 'login'

    }
    res.status(200).send(result);
});

module.exports = router;