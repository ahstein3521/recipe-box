import React from 'react';

import EstimatedTimes from './times.jsx';
import BannerMenu from './menu.jsx';

const RecipeContentHeader = props => (
	<div id='selected-content-header'>
		<BannerMenu {...props}/>
		<EstimatedTimes {...props}/>
	</div>
)

export default RecipeContentHeader;