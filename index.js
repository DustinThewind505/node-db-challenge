const express = require('express');

const PORT = 4444;

const server = express();

server.listen(PORT, () => {
    console.log(`\n\t\t\t\t\t *** API running on localhost:${PORT} *** \n`)
})
