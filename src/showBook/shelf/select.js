import React from 'react'
import './App.css'

class Select extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (event) {
        this.props.update(this.props.book, event.target.value)
    }
    render(){
        return(
            <div className="book-shelf-changer">
                <select value={this.props.value} onChange={this.handleChange} >
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead" >Want to Read</option>
                  <option value="read" >Read</option>
                  <option value="none" >None</option>
                </select>
              </div>
        )
    }
}
export default Select