var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todoList = [{
    id: 1,
    todo: "Implement a REST API"
}, { id: 12, todo: "Implemented" }];


// GET /api/todos
app.get('/api/todos', function(req, res, next) {
    res.json(todoList)
})

// GET /api/todos/:id

app.get('/api/todos/:id', function(req, res, next) {
    let id = parseInt(req.params.id);
    let foundID = todoList.find(function(item) {
        return item.id === id;
    })
    res.send(foundID);
})

// POST /api/todos
app.post('/api/todos', function(req, res, next) {
        //Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
        let nextId = todoList.reduce((acc, element) => {
            if (element.id > acc) {
                return element.id
            }
            return acc++
        }, 0) + 1

        let toDoObj = {
            id: nextId,
            todo: newBody.todo
        }
        todoList.push(toDoObj)

        res.send(toDoObj)

    })
    // PUT /api/todos/:id

// DELETE /api/todos/:id

app.listen(3000, function() {
    console.log('Todo List API is now listening on port 3000...');
})