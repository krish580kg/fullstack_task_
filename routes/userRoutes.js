const express = require('express');
const router = express.Router();

// REGISTER PAGE
router.get('/register', (req, res) => {
    res.render('register');
});

// LOGIN PAGE
router.get('/login', (req, res) => {
    res.render('login');
});

// LOGIN LOGIC
router.post('/login', (req, res) => {
    req.session.user = req.body.number;
    res.redirect('/courses');
});

// LOGOUT
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

module.exports = router;