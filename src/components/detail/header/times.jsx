import React from 'react';

const EstimatedTimes = ({recipes}) => {
	const {selected} = recipes
	return(
	<ul className="time-estimates">
		<li><strong>Prep time:</strong>{selected.prepTime}</li>
		<li><strong>Cooking time:</strong>{selected.cookTime}</li>
		<li><strong>Total time:</strong>{selected.totalTime}</li>
	</ul>
	)
}

export default EstimatedTimes;