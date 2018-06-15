import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './search'
import ShowBook from './showBook'

class BooksApp extends React.Component {
  constructor(props){
    super(props),
    this.state = {
      books:[]
    }
  }
  
  componentWillMount () {
    BooksAPI.getAll().then((data)=>{
      this.setState({
        books:data
      },()=>{

      })
    })
  }
  render() {
    console.log(this.state.books)
   
    return (
      <div className="app">
        <Route exact path='/' render={() => <ShowBook books={this.state.books} />} />
        <Route exact path='/search' render={() => <SearchBook books={this.state.books} />} />
      </div>
    )
  }
}

export default BooksApp
