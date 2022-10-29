const { application } = require('express');
const express = require('express');
const validate = require('express-jsonschema').validate;
const bodyParser = require('body-parser');

const app = express();
const PORT = 6996

app.use(express.json());

//todo json format format
let todosSchema = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        },
        obs: {
            type: 'string',
            required: false
        }
    }
}

//array to store the todos list
let todos = [];

//listening to port
app.listen(PORT,()=>{
    console.log('listening on '+PORT);
});

//request all todos
app.get('/', (req,res)=>{

    res.status(200).json(todos);

});

//resquest 1 todo
app.get('/todos/:id',(req,res)=>{
    let parm = req.params.id;
    //res.send("You resquest todo whith ID " + parm)
    //let single_todo = todos[parm]
    res.json(todos[parm]);

});

//add todos
app.post('/add',validate({body: todosSchema}),(req,res)=>{

    //if the post request is validated save the post in a new variable
    let todo = req.body;

    //get the title and description length
    let todoTitle = todo.title
    let todoDescription = todo.description

    //validate the length of the title and description
    if(todoTitle.length <= 10 || todoDescription.length <= 20){
        res.send("Error: Invalid title or description length")

    }else{
        //if the title and description length are valid, save the todo
        todos.push(todo);
        res.send("Successfully added");

    }

});

app.put("/update/:id",validate({body: todosSchema}),((req, res)=>{
    let parm = req.params.id;
    let todo = req.body;
    let todoTitle = todo.title
    let todoDescription = todo.description

    //validate the length of the title and description
    if(todoTitle.length <= 10 || todoDescription.length <= 20){
        res.send("Error: Invalid title or description length")

    }else{
        //if the title and description length are valid, update the todo
        todos.splice(Number(parm),1,todo);
        res.send("Successfully update");
    }

}));

app.delete("/delete/:id",(req,res)=>{
    let parm = req.params.id;

    //removing the todo from the array
    todos.splice(Number(parm),1);

});
