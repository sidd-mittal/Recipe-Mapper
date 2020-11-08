const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs', { name: 'Jerry'})
})

router.get('/login', (req, res) => {
    res.render('login.ejs')
})

router.get('/register', (req, res) => {
    res.render('register.ejs')
})

router.post('/register', (req, res) => {
    
})

module.exports = router;