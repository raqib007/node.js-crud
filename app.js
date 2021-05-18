const http = require('http');
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
//routes
const indexRouter = require('./routes/index.js');
const usersRouter = require('./routes/users.js');

const app = express();
app.use(cors());
app.use('/',indexRouter);
app.use('/api',usersRouter);

const server = http.createServer(app);

server.listen(port,() => {
    console.log(`Server running at port ${port}`);
})
