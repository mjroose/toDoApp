const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove() - delete multiple records matching query
// to delete everything remove({})
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findOneAndRemove({_id: '5a525d6d4ce41e0bd05d2683'}).then((result) => {
//   console.log(todo);
// });

// Todo.findByIdAndRemove
Todo.findByIdAndRemove('5a525d6d4ce41e0bd05d2683').then((todo) => {
  console.log(todo);
});