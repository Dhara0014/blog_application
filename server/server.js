const express = require('express');
const connectToMongoDB = require('./connect');
const cors = require('cors');

const Blog = require('./route/blogRoute');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send('hii')
});
connectToMongoDB;

app.use('/api', Blog)

app.listen(4545,() => console.log('server is running on port 4545 >>'));