import React from 'react';
import Button from '../../../common/button.jsx';

const AlreadyImported = props => (
	<Button onClick = {()=> {return}} 
			content = "Recipe added to library " 
			   icon = "check" 
		  className = "hidden-btn"/> 
)


const ImportButton = (props) => {
	const {imported, recipe} = props;

    if(imported) return <AlreadyImported/>
	
	return <Button onClick = {props.onClick.bind(null,recipe.recipe_id)} 
				   content =  "Import this recipe " 
				      icon = "import" 
				 className = "import-btn"/> 
}

export default ImportButton