import React from 'react'
import './App.css'

class Select extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="book-shelf-changer">
                <select>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading" onChange={this.props.update('currentlyReading',this.props.book)} >Currently Reading</option>
                  <option value="wantToRead" onChange={this.props.update('wantToRead', this.props.book)} >Want to Read</option>
                  <option value="read" onChange={this.props.update('read', this.props.book)} >Read</option>
                  <option value="none" >None</option>
                </select>
              </div>
        )
    }
}
export default Select