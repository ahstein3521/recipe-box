import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {importRecipe} from '../../../actions/index';

import Attribution from './attribution.jsx'
import SearchResultThumbnail from './thumbnail/index.jsx';
import SearchResultsHeader from './header.jsx';

import _ from 'lodash'

class SearchResultsList extends Component{

	constructor(props){
		super(props);
		this.importRecipe = this.importRecipe.bind(this);
	}

	importRecipe(id){
		const [...list] = this.props.list;
		this.props.importRecipe(list, id);
	}

	renderResults(){

		const list = this.props.list;
		return this.props.search.results.map((recipe, i)=> (
			<SearchResultThumbnail imported = {_.find(list, {recipe_id:recipe.recipe_id})}
								   key = {i} 
								recipe = {recipe} 
							   onClick = {this.importRecipe} />
		))
	}

	renderError(){

		 return <div id='main'><h3>{this.props.search.message}</h3></div>
	}
	render(){
		const {query, error, message} = this.props.search;
		if (error) return this.renderError();
		
		return (
			<div id ="main">
				<SearchResultsHeader query={query}/>
				<div id='search-result-container'>
					{this.renderResults()}
				</div>
				<Attribution/>
			</div>	
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({importRecipe},dispatch);
}

export default connect(null, mapDispatchToProps)(SearchResultsList);
