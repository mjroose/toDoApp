const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a514d839bfa18267c4cc906';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Unable to fetch todo by that ID');
//   }
//   console.log('Todos', todo)
// }).catch((e) => {
//   console.log(e);
// });

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Invalid User ID');
  }

  console.log('User', user);
}, (e) => {
  console.log(e);
});