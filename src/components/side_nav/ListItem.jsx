import React from 'react';

const RecipeListItem = props => {
	const {title, index, recipe_id, selected,onSelect} = props;
	const className = (recipe_id == selected)? 'li-active' : 'recipe-li';
	
	return(
		<li className={className}  onClick={()=> onSelect(index)}>
			<strong>{title}</strong>
		</li>
	)
}

export default RecipeListItem;