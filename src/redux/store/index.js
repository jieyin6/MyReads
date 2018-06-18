import * as BooksAPI from '../../BooksAPI'

var state;
BooksAPI.getAll().then(data => state = data)

export default state