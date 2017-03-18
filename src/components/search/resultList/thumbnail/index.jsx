import React from 'react';
import ImportButton from './importButton.jsx';

const defaultImage = 'https://placehold.it/350x150';


const SearchResultThumbnail = props => {
	const {recipe, onClick, imported } = props;
	const style = {backgroundImage: `url(${recipe.image_url})`}
	

	return(
		<div className='search-result' style={style}>
			<div className = 'overlay'></div>
			<h4>{recipe.title}</h4>	
			<ImportButton {...props} />
		</div>
	)
}
export default SearchResultThumbnail;