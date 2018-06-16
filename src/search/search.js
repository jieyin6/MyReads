import React from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'
import Book from '../showBook/shelf/book'
import * as BooksAPI from '../BooksAPI'

class SearchBook extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          AllBooks: [],
          result:[],
          value:''
      }
      this.searchBook = this.searchBook.bind(this)
      this.handleChange = this.handleChange.bind(this)
  }
  searchBook (value) {
    value ?  BooksAPI.search(value).then((data)=>{
        this.setState({
            AllBooks:data
        })
    }) : this.setState({AllBooks:[]})
  }
 
  handleChange (event) {
   /* this.setState({
        value : event.target.value
    })
    console.log(this.state.value)*/
    this.searchBook(event.target.value)
  }
  render(){
    return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/' >Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.AllBooks.length ? this.state.AllBooks.map((book, index) => <Book book={book} key={index} />) : null }
              </ol>
            </div>
          </div>
    )
  }
}
export default SearchBook