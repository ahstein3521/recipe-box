import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {submitQuery, dispatcher, selectQuery} from '../../actions/index';
import Button from '../common/button.jsx';


class SearchBar extends Component{
	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.alreadySubmitted = this.alreadySubmitted.bind(this);
		this.state = {text:""}
	}
	alreadySubmitted(){
		const text = this.state.text.trim();
		const regex = new RegExp(text, "i");
				
		for(let i in this.props.list){
			const {query} = this.props.list[i]
			if(regex.test(query)) return i;
		};
		return -1;
	}
	onSubmit(e){
		e.preventDefault();
		const {list, submitQuery, dispatcher, selectQuery} = this.props;
		const index = this.alreadySubmitted();
		
		if(index > -1){
			selectQuery(index, list);
		}else{
			dispatcher("HIDE_SEARCH_RESULTS");
			dispatcher("CLOSE_MENU");
			submitQuery(this.state.text.trim(), list);
			dispatcher("DESELECT_RECIPE");
		}
	}
	render(){
		
		return(
			<form onSubmit={this.onSubmit}>
				<div className = 'form-group'>
					<input type='text' value={this.state.text}
						placeholder='Search online for new recipes'
						onChange={e=> this.setState({text:e.target.value})}/>
					<Button icon = 'search' className = 'search-btn' type='submit'/>
				</div>					
			</form>
			
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({submitQuery,dispatcher, selectQuery},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);