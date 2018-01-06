const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server.");
    }
    console.log('Connected to MongoDB server');

    const db = client.db('ToDoApp');
    // db.collection('Todos').find({
    //     _id: new ObjectID('5a50f1ddfef4ec12f4a1ee93')
    // }).toArray().then((docs) => {
    //     console.log('Todos', JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch Todos', err);
    });

    client.close();
});