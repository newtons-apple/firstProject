import React, { Component } from 'react';
class Details extends Component {
  
    render() { 
        return ( 
        <div>
            <p>{this.props.contact.name}</p>
            <p>{this.props.contact.phone}</p>
            <button value='edit' onClick={this.props.edit}/>
            <button value = 'delete' onClick={this.props.delete}/>
        </div> )
    }
}
 
export default Details;