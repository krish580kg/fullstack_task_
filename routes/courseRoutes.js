const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// SHOW ALL COURSES
router.get('/courses', async (req, res) => {
    const courses = await Course.find();
    res.render('courses', { courses });
});

// NEW COURSE FORM
router.get('/course/new', (req, res) => {
    res.render('newCourse');
});

// CREATE
router.post('/courses', async (req, res) => {
    await Course.create(req.body);
    res.redirect('/courses');
});

// EDIT FORM
router.get('/courses/:id/edit', async (req, res) => {
    const course = await Course.findById(req.params.id);
    res.render('editCourse', { course });
});

// UPDATE (courseName cannot change)
router.post('/courses/:id', async (req, res) => {
    const { price, image, duration, courseStartDate } = req.body;

    await Course.findByIdAndUpdate(req.params.id, {
        price,
        image,
        duration,
        courseStartDate
    });

    res.redirect('/courses');
});

// DELETE
router.get('/courses/:id/delete', async (req, res) => {
    await Course.findByIdAndDelete(req.params.id);
    res.redirect('/courses');
});

module.exports = router;