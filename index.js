const express = require('express');
const cors = require('cors');
const chef = require('./Data/chef.json')
const recipes = require('./Data/recipes.json')
const blog = require('./Data/blog.json')
const app = express();
const PORT = 5000;

app.use(cors());

app.get("/", (req, res)=>{
    res.send("<h1>Legend Chef Running</h1>")
})

app.get("/chef", (req, res)=>{
    res.send(chef)
})

app.get("/chef/:id", (req,res)=>{
    const id = req.params.id;
     const findRecipes = recipes.filter(r =>  r.chef_id == id)
    res.send(findRecipes)
   

})
app.get("/recipe/:id", (req,res)=>{
    const id = req.params.id;
     const filterRecipes = recipes.find(r =>  r.id == id)
    res.send(filterRecipes)
   

})

// blog routing
app.get("/blogs", (req,res)=> {
    res.send(blog)
})

app.listen(PORT, () => {
    console.log(`server is running in ${PORT} port`);
})