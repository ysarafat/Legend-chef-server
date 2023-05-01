const express = require('express');
const cors = require('cors');
const chef = require('./Data/chef.json')
const app = express();
const PORT = 5000;

app.use(cors());

app.get("/", (req, res)=>{
    res.send("<h1>Legend Chef Running</h1>")
})

app.get("/chef", (req, res)=>{
    res.send(chef)
})

app.listen(PORT, () => {
    console.log(`server is running in ${PORT} port`);
})