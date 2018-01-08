require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

// POST /todos route - adds a new todo to database
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET /todos route - returns all todos from database
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(404).send(e);
    });
});

// GET /todos/:id route - finds a single todo by id
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (todo) {
            res.send({todo});
        } else res.status(404).send();
    }).catch((e) => {
        res.status(400).send();
    });
});

// DELETE todo

app.delete('/todos/:id', (req, res) => {
    //get the id
    var id = req.params.id;

    if (!ObjectID.isValid(id)) return res.status(404).send();
    
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) return res.status(404).send();
        
        res.send({todo});
            
    }).catch((e) => {
        res.status(400).send();
    });
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']); //pick only picks out keys that match this array

    if (!ObjectID.isValid(id)) return res.status(404).send();

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime(); //getTime gets a javascript timestamp
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = {app};