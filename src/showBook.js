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
            shelfName:['Currently Reading', 'Want to Read', 'Read'],
            books:[]
        }
        this.updateShelf = this.updateShelf.bind(this)
    }
    componentDidMount () {
        BooksAPI.getAll().then((data)=>{
            this.setState({
              books:data
            })
          })
    }
    updateShelf () {
        BooksAPI.getAll().then(data => {
            this.setState({
                books:data
            })
        })
    }
    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {this.state.shelfName.map((shelf, index) => <Shelf updateShelf={this.updateShelf} key={index} name={shelf} books={this.state.books} /> )}
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div> 
          </div>
        )
    }
}
export default ShowBook