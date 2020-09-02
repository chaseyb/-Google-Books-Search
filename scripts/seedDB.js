const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googleboks');

const bookSeed = {
	authors: ['Dan Brown'],
	description:
		'An ingenious code hidden in the works of Leonardo da Vinci. A desperate race through the cathedrals and castles of Europe. An astonishing truth concealed for centuries . . . unveiled at last.',
	image: '',
	link: '',
	title: 'The Da Vinci Code',
};
db.Post.remove({})
	.then(() => db.Post.collection.insertMany(bookSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
