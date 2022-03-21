const express = require('express');
const app = express();

const { PORT } = require('./src/config');
const db = require('./src/models');


app.get('/', (req, res) => {
    res.send('Hello World!');
});


db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('🙊 Connected to MongoDB server!');
    })
    .catch(err => {
        console.log('💔 Error connecting to MongoDB: ', err);
    });



app.listen(PORT, () => {
    console.log(`🚂...Server started on port ${PORT}!`);
});