const db = require('../data/dbConfig')

// =========== GET Projects ===========

function getProjects() {
    return db('projects')
}

// =========== GET Projects by id ===========
function getProjectById(id) {
    return db('projects').where({ id })
}

// =========== POST Project ===========
function addProject(project) {
    return db('projects').insert(project)
        .then(ids => {
            return getProjectById(ids[0])
        })
}

// =========== GET Tasks with Project ===========
function getTasks() {
    return db('tasks')
        .join('projects', 'projects.id', '=', 'tasks.project_id')
        .select('projects.name as Project Name', 'projects.description as Project Description', 'tasks.description as Task Description', 'tasks.notes as Task Notes', 'tasks.completed as Is Task Completed')
}

// =========== GET Task by id ===========
function getTaskById(id) {
    return db('tasks').where({ "tasks.id": id })
        .join('projects', 'projects.id', '=', 'tasks.project_id')
        .select('projects.name as Project Name', 'projects.description as Project Description', 'tasks.description as Task Description', 'tasks.notes as Task Notes', 'tasks.completed as Is Task Completed')
}

// =========== POST Task ===========
function addTask(task) {
    return db('tasks').insert(task)
        .then(ids => {
            return getTaskById(ids[0])
        })
}


module.exports = {
    getProjects,
    getProjectById,
    addProject,
    getTasks,
    getTaskById,
    addTask
}