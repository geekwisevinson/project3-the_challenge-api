require('apprequire')(__dirname);

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

const app = express();
app.listen(5000);

const db = mongoose.connection;

db.on('connected',()=>{
	console.log('connected')
});

console.log(process)
mongoose.connect(process.env.DB_URL);

const UserSchema = new Schema({
	name: String,
	password: String,
});


mongoose.model("User",UserSchema);
const User = mongoose.model('User');

let first = {
	name: 'vinson',
	password: 'test'
};

new User(first).save().then(user=>{
	console.log(user);
});