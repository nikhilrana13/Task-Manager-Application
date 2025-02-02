const express = require("express");
const app = express();
const Path = require("path");
const taskModel = require("./models/createTaskmodel");



app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(Path.join(__dirname,'public')))
app.use(express.json());





app.post('/update/:id',async function(req,res){
    const id = req.params.id;
    const task = await taskModel.findByIdAndUpdate(id,req.body);

    res.redirect('/alltasks');
    
})

app.get('/edit/:id',async function(req,res){
    const id = req.params.id;

    const task =  await taskModel.findById(id);

    res.render('edit',{task});
})

app.get('/alltasks',async function(req,res){
    const task =  await taskModel.find();

    res.render('show',{task})
})



app.get('/delete/:id',async function(req,res){
    const id = req.params.id;
    const task = await taskModel.findByIdAndDelete(id);

    res.redirect('/alltasks');
})

app.post('/create', async function(req,res){
    const {title,details} = req.body;
    // console.log(title,details);

    const task = new taskModel({
        title,
        details
    })

      await task.save();
       res.redirect('/alltasks');
    })




app.get('/',function(req,res){
    res.render('index')
})




app.listen(3000)