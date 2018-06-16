import React from 'react'
import ReactDom from 'react-dom'
import Book from './book'
import './App.css'
import BooksApp from './App';

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
       this.handleArray(nextBooks)
    }
   /* renderBook (books) {
        console.log(books)
        books.map((book,index) => 
            
            <Book key={index} book={book} />
        )
    }*/
    handleArray (nextBooks) {
        this.setState({
            currentlyReading:nextBooks.books.filter(book => book.shelf === 'currentlyReading'),
            wantToRead:nextBooks.books.filter(book => book.shelf === 'wantToRead'),
            read:nextBooks.books.filter(book => book.shelf === 'read')
        })
    }
    updateBookInshelf (type, book) {
        BooksApp.update(type, book).then(res => {
            this.handleArray(res)
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