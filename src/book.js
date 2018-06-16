import React from 'react'
import ReactDom from 'react-dom'
import Select from './select'
import './App.css'
import * as BooksAPI from './BooksAPI'

class Book extends React.Component{
    constructor(props){
        super(props)
        this.updateBook = this.updateBook.bind(this)
    }
    updateBook (type, book) {
        console.log(type, book)
        this.props.updateBook(type, book)
        BooksAPI.update(book, type).then(()=>{

        })
    }
    render(){
        return (
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
              <Select update={this.updateBook} book={this.props.book} value={this.props.book.shelf} />
            </div>
            <div className="book-title">{this.props.book.title ? this.props.book.title : '书名不详'}</div>
            <div className="book-authors">{this.props.book.authors ? this.props.book.authors : '暂无作者'}</div>
          </div>
        )
    }
}

export default Book