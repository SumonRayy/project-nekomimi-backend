const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const { PORT } = require('./src/config');
const db = require('./src/models');


db.mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('🙊 Connected to MongoDB server!');
    })
    .catch(err => {
        console.log('💔 Error connecting to MongoDB: ', err);
    });


app.get('/', (req, res) => {
    res.send('Hello Neko!');
});


require('./src/routes/videos.routes')(app);


app.listen(PORT, () => {
    console.log(`🚂...Server started on port ${PORT}!`);
});