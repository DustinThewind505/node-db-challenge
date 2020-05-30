const db = require('../data/dbConfig');

module.exports = {
    add,
    get
}
// =========== GET Projects ===========
function get() {
    return db('projects')
}

// =========== POST Projects ===========
function add(project) {
    return db('projects').insert(project)
}

