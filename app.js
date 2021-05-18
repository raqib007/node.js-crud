const http = require('http');
const express = require('express');
const cors = require('cors');
const db = require('./models');
const dbconfig = require('./db.config');
const port = process.env.PORT || 3000;

//routes
const indexRouter = require('./routes/index.js');
const usersRouter = require('./routes/users.js');

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/', indexRouter);
app.use('/api', usersRouter);

db.mongoose.connect(
    db.url,
    {useNewUrlParser:true,useUnifiedTopology:true}
).then(()=>{
    console.log(`Connected to database`);
}).catch((error)=>{
    console.log(`can't connect to the database `,error);
    process.exit();
})

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});


