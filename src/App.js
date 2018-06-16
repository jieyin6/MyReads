import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './search/search'
import ShowBook from './showBook/showBook'

class BooksApp extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
   return (
      <div className="app">
        <Route exact path='/' render={() => <ShowBook />} />
        <Route exact path='/search' render={() => <SearchBook />} />
      </div>
    )
  }
}

export default BooksApp
