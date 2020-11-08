const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs', { name: 'HackAttack Team 6'})
})

router.get('/login', (req, res) => {
    res.render('login.ejs')
})

router.post('/login', (req, res) => {
    res.redirect('https://www.figma.com/proto/MrIZ3lzQmVt4snuYVqJ2wT/Recipe-Mapper-(SYDE%2FBME-Hackathon)?node-id=5%3A0&scaling=min-zoom')
})

router.get('/register', (req, res) => {
    res.render('register.ejs')
})

router.post('/register', (req, res) => {
    res.redirect('/login')
})

module.exports = router;
