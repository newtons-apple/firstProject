import React from 'react';
import Creator from './Creator';
import Details from './Details';
import SearchBar from './SearchBar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions'

class App extends React.Component {
    constructor(props){
        super(props);

        this.state={list:[{name:'Abet',phone:'010-0000-00011'}
        ,{name:'Betty',phone:'010-0000-0002'}
        ,{name:'Chrome',phone:'010-0000-0003'}
        ,{name:'Darling',phone:'010-0000-0001234'}],
        //위의 리스트를 state에 담는 순간 한계가 시작된다. 차라리 db와 연동시켜 사용하면 redux로 사용할 수 있을듯

        keyword:''
        }
        this.makelist=this.makelist.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    componentDidMount(){
        this.props.detail(1);    
    }

    makelist(list){
        let filtered =[];
       
        for(let i =0;i<list.length;i++){
            if(list[i].name.toLowerCase().indexOf(this.state.keyword)>-1){
                filtered.push(list[i])
            }
        }
        filtered = filtered.map((value,i)=>{
            return <ul key={i} onClick={()=>{this.props.detail(i); console.log(this.props.key)}}>{value.name}</ul>
        })

        return filtered
        
    }
    handleChange(e){
        this.setState({
            keyword:e.target.value
        })
    }
   
    render() { 
        return ( <div>
            <h1>Contact</h1>
            <SearchBar 
            changeKey={this.handleChange}
            />
            {this.makelist(this.state.list)}
            <h1>Details</h1>
            {/* {(this.props.key===-1)?  */}
            <Details contact={{name:'',phone:''}}/>
            {/* :<Details 
            contact={this.state.list[this.props.key]}/>} */}
            
            <h1>Create</h1>
            <Creator/>
        </div> )
    }
}

const mapStateToProps = (state)=>{
    return {
        key:state.detail.index
    }
}
const mapDispatchToProps =(dispatch)=>{
    return bindActionCreators(actions,dispatch)
}
 
export default connect(mapStateToProps,mapDispatchToProps)(App) ;