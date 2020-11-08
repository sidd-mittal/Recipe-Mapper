const express = require('express')
const cors = require('cors')
const http = require('http');
const router = require('./router');

const app = express()
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;


app.set('view-engine', 'ejs')

app.use(router)
app.use(cors())

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
