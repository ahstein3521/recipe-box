import React from 'react';

const NavButton = props => {
	const {selected, label, onClick} = props;
	const color = selected? "-active" : "";

	return (
		<button className={`nav-btn${color}`} onClick={()=> onClick(label)}>
			{ label}
		</button>
	)
}

export default NavButton;