//SearchBar 만 따로 사용하는 것이 불가능.... list에 직접적인 영향을 미치기 때문...



import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.setKeyword=this.setKeyword.bind(this)
    }
    setKeyword(e){
        this.props.changeKey(e);
    }
    render() { 
        return (  <input 
            name='searchBar' 
            placeholder='search' 
            value= {this.props.keyword}
            onChange ={this.setKeyword}/> )
    }
}
 
export default SearchBar;