import React from 'react';
import EditField from '../../common/editField.jsx';
import NewIngredient from './newField.jsx';


const ListItem = ({ingredient, index}) => (
	<li className="ingredient">
		<EditField value={ingredient} fieldType='ingredients' index={index}>
	        <span>
	        	<strong>{ingredient}</strong>
	          	<span className='glyphicon glyphicon-pencil'></span>
	        </span>
	    </EditField>
	</li>			
)

const IngredientList = props => (
	<ul>
		<h3>Ingredients:</h3>
		{
			props.recipes.selected.ingredients.map((ingredient,i) => (
				<ListItem key={i} ingredient={ingredient} index={i}/>
			)
		)}
		<NewIngredient/>	
	</ul>
)


export default IngredientList;
