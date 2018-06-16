import React from 'react'
import ReactDom from 'react-dom'
import Book from './book'
import './App.css'
import * as BooksAPI from './BooksAPI'

class Shelf extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentlyReading:[],
            wantToRead:[],
            read:[]
        }
       // this.renderBook = this.renderBook.bind(this)
       this.updateBookInshelf = this.updateBookInshelf.bind(this)
    }
    componentWillReceiveProps (nextBooks) {
       this.handleArray(nextBooks.books)
    }
   /* renderBook (books) {
        console.log(books)
        books.map((book,index) => 
            
            <Book key={index} book={book} />
        )
    }*/
    handleArray (nextBooks) {
        console.log(nextBooks)
        this.setState({
            currentlyReading:nextBooks.filter(book => book.shelf === 'currentlyReading'),
            wantToRead:nextBooks.filter(book => book.shelf === 'wantToRead'),
            read:nextBooks.filter(book => book.shelf === 'read')
        })
    }
    updateBookInshelf (type, book) {
        BooksAPI.update(type, book).then(res => {
            BooksAPI.getAll().then( data => {
                console.log(data)
                this.handleArray(data)
            })
        })
    }
    render(){
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                { !this.props.books.length ? <div >加载中...</div> : this.props.name === 'Currently Reading' ? this.state.currentlyReading.map((book, index) => <Book updateBookInshelf={this.updateBookInshelf} book={book} key={index} />)
                 : this.props.name === 'Want to Read' ? this.state.wantToRead.map((book,index) => <Book updateBookInshelf={this.updateBookInshelf} book={book} key={index} />) : this.state.read.map((book,index) => <Book updateBookInshelf={this.updateBookInshelf} book={book} key={index} />) }
              </ol> 
            </div>
          </div>
        )
    }
}

export default Shelf