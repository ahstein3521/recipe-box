import React,{Component} from 'react';

import RecipeListItem from './ListItem.jsx';

export default class RecipeList extends Component{
	constructor(props){
		super(props);
		this.onSelect = this.onSelect.bind(this);
	}
	renderUL(){
		const {list,selected} = this.props.recipes 
		const selectedId = selected? selected.recipe_id : null;
		return list.map(({recipe_id, title},index)=>( 
			<RecipeListItem title = {title}
							recipe_id = {recipe_id}
						    index= {index}
							  key={index} 
					     selected={selectedId} 
					     onSelect={this.onSelect}/>
		));
	}

	onSelect(index){
		this.props.dispatcher("HIDE_SEARCH_RESULTS")
		this.props.dispatcher("CLOSE_MENU");
		this.props.selectRecipe(index);
	}

	componentWillMount(){
		const {recipes, fetchList} = this.props;
		const storedList = localStorage.getItem("recipeList");
		
		if((!recipes.list.length && storedList)|| !storedList){
			fetchList();
		}//initialize props with localStorage if there is localStorage data
		//or initialize with default props
	}
	render(){

		return (
		<div>
			<ul id='sidenav-ul'>{this.renderUL()}</ul>			
		</div>
		)
	}
}

	


