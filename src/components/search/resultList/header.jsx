import React from 'react';

const SearchResultsHeader = props => (

	<div className = 'search-results-header'>
		<h3>Displaying top results for <em>'{props.query}'</em></h3>	
	</div>	

)

export default SearchResultsHeader;