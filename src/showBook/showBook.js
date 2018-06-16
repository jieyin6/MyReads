import React from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './shelf'
import './App.css'

class ShowBook extends React.Component {
    constructor(props){
        super(props)
        this.state={
            currentlyReading:[],
            wantToRead:[],
            read:[]
        }
        this.updateShelf = this.updateShelf.bind(this)
        this.handleArray = this.handleArray.bind(this)
    }
    componentDidMount () {
        this.handleArray()
    }
    handleArray (){
        BooksAPI.getAll().then((data)=>{
            console.log(data)
            this.setState({
                currentlyReading:data.filter(book => book.shelf === 'currentlyReading'),
                wantToRead:data.filter(book => book.shelf === 'wantToRead'),
                read:data.filter(book => book.shelf === 'read')
            })
          })
    }
    updateShelf (book, type) {
        console.log(type,book)
        BooksAPI.update(book, type).then(res => {
            this.handleArray()
        })
    }
    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf  updateShelf={this.updateShelf} name='Currently Reading' books={this.state.currentlyReading} /> 
              <Shelf  updateShelf={this.updateShelf} name='Want to Read' books={this.state.wantToRead} /> 
              <Shelf  updateShelf={this.updateShelf} name='read' books={this.state.read} /> 
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div> 
          </div>
        )
    }
}
export default ShowBook