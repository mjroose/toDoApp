const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server.");
    }
    console.log('Connected to MongoDB server');

    const db = client.db('ToDoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });   

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({text: 'Walk the dog'}, {$set: {complete: true}}).then((result) => {
    //     console.log('Update successful', result);
    // }, (err) => {
    //     console.log(err);
    // });

    db.collection('Users').findOneAndUpdate({name: 'Steve'}, {$inc: {age: 1}}).then((r) => {
        console.log(r);
    });

    db.collection('Users').findOneAndUpdate({name: 'Steve'}, {$set: {name: 'Michael'}}).then((r) => {
        console.log(r);
    });

    client.close();
});