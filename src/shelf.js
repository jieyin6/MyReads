import React from 'react'
import ReactDom from 'react-dom'
import Book from './book'
import './App.css'
import * as BooksAPI from './BooksAPI'

class Shelf extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           
        }
       // this.renderBook = this.renderBook.bind(this)
       this.updateBookInshelf = this.updateBookInshelf.bind(this)
    }
   /* renderBook (books) {
        console.log(books)
        books.map((book,index) => 
            
            <Book key={index} book={book} />
        )
    }*/
    updateBookInshelf (type, book) {
       this.props.updateShelf(type, book)
    }
    render(){
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                { !this.props.books.length ? <div >加载中...</div> : this.props.books.map((book, index) => <Book updateBookInshelf={this.updateBookInshelf} book={book} key={index} />)
                 }
              </ol> 
            </div>
          </div>
        )
    }
}

export default Shelf