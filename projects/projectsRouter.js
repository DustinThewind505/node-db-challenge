const express = require('express');
const Projects = require('./projectsModel');
const router = express.Router();

router.post('/', (req, res) => {
    const newProject = req.body;
    if(!newProject.name){
        res.status(400).json({ errorMessage: "please provide project name" })
    } else {
        Projects.add(newProject)
        .then(response => res.status(201).json({ message: "project successfully created" }))
        .catch(error => res.status(500).json({ errorMessage: "could not create project at this time" }))
    }
})

router.get('/', (req, res) => {
    Projects.get()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json({ errorMessage: "could not retrieve projects at this time" }))
})

module.exports = router;