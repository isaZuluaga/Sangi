const express = require('express');

const router = express.Router();
const SangiMember = require('../models/sangiMember')

//Defining Routes
router.get('/',(req, res)=>{

    SangiMember.find({ })
    .then((data) =>{
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error: ',error);
    });

});

router.get('/name',(req, res)=>{
    const data = {
        username: 'peter',
        age: 6
    };
    res.json(data);
});

module.exports = router;