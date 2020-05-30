const db = require('../data/dbConfig')

// =========== GET Resources ===========
function getResources() {
    return db('resources')
}

// =========== GET Resources by id ===========
function getResourceById(id) {
    return db('resources').where({ id })
}

// =========== POST Resources ===========
function addResource(resource) {
    return db('resources').insert(resource)
        .then(ids => {
            return getResourceById(ids[0])
        })
}

module.exports = {
    getResources,
    getResourceById,
    addResource
}