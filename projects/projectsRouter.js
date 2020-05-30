const express = require('express');

const Projects = require('./projectsModel')

const router = express.Router();


// =========== GET Projects ===========
router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(() => {
            res.status(500).json({ message: "Failed to get projects." })
        })
})

// =========== POST Project ===========
router.post('/', (req, res) => {
    Projects.addProject(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(() => {
            res.status(500).json({ message: "failed to create new project" })
        })
})


// =========== GET Tasks ===========
router.get('/tasks', (req, res) => {
    Projects.getTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(() => {
            res.status(500).json({ message: "Failed to get tasks." })
        })
})

// =========== POST Tasks ===========
router.post('/:id/tasks', (req, res) => {
    Projects.getProjectById(req.params.id)
        .then(projects => {
            if(projects.length > 0) {
                const newTask = { ...req.body, project_id: Number(req.params.id) }
                Projects.addTask(newTask)
                    .then(task => {
                        res.status(201).json(task)
                    })
                    .catch(err => {
                        res.status(500).json({ message: "failed to create task" })
                    })
            }
            else {
                res.status(400).json({ message: "No project found." })
            }
        })
})



module.exports = router