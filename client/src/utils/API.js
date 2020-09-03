import axios from 'axios';

export default {
	getBook: (title) => {
		return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + title);
	},
	// Deletes the book with the given id
	deleteBook: (id) => {
		return axios.delete('/api/books/' + id).then((result) => result.data);
	},
	// Saves a book to the database
	saveBook: (bookData) => {
		return axios.post('/api/books', bookData).then((result) => result.data);
	},
	// Get the saved a books from the database
	savedBooks: () => {
		return axios.get('/api/books').then((result) => result.data);
	},
};
