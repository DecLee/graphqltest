const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const url = 'mongodb+srv://MangoUser:MangoUser@cluster0-wqsts.mongodb.net/userTest?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to mongo at ${url}`));
