const server = require('./api/server');

const PORT = 4444;

server.listen(PORT, () => {
    console.log(`\n\t\t\t\t\t *** API running on localhost:${PORT} *** \n`)
})
