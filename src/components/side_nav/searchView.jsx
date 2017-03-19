import React,{Component} from 'react';

import RecipeListItem from './ListItem.jsx';
import SearchBar from '../search/searchBar.jsx';


export default class SearchList extends Component{
	constructor(props){
		super(props);
		this.onSelect = this.onSelect.bind(this);
	}
	renderUL(){
		const {history, query} = this.props.search 
		const selectedId = query? query : null;
		return history.map((prop, index)=>( 
			<RecipeListItem title={prop.query} 
							index={index} 
							   id={prop.query} 
							  key={index} 
					     selected={selectedId} 
					     onSelect={this.onSelect}/>
		));
	}

	onSelect(index){
		this.props.dispatcher("HIDE_SEARCH_RESULTS");
		this.props.dispatcher("CLOSE_MENU");	
		this.props.selectQuery(index, this.props.search.history);
	}
	componentWillMount(){
		const {search, fetchHistory} = this.props;
		const storedList = localStorage.getItem("searchHistory");
		
		if((!search.history.length && storedList)|| !storedList){
			fetchHistory()
		}//initialize props with localStorage if there is localStorage data
		//or initialize with default props
	}	

	render(){
		const {history} = this.props.search;
		return (
		<div>
			<SearchBar list={history}/>
			<ul className='sidenav-ul'>
				<h2>Recently Searched:</h2>
				{this.renderUL()}
			</ul>			
		</div>
		)
	}
}


	

