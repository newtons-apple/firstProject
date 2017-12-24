import React, { Component } from 'react';

class Creator extends Component {
    render() { 
        return ( 
        <div>
            <input name='name' placeholder='name' value={this.props.name}/>
            <input name='phone' placholder='phone' value={this.props.phone}/>
            <button name='Creator' onClick={this.props.create}/>
            
        </div> )
    }
}
 
export default Creator;