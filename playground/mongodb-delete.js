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

    // db.collection('Users').find({name: 'Steve'}).toArray().then((result) => {
    //     if (result[0]._id) {
    //         db.collection('Users').findOneAndDelete({_id: new ObjectID(result[0]._id)}).then((result) => {
    //             console.log('Successfully deleted user');
    //         }, (err) => {
    //             console.log('Error deleting user');
    //         });
    //     } else {
    //         console.log('User not found');
    //     }
    // }, (err) => {
    //     console.log(err);
    // });

    client.close();
});