import React from 'react';

const Button = props => {
	const {onClick, icon, className, text,content} = props;
	const label = content || ""
	
	return (

		<button className={className} onClick={onClick} title={text} type={props.type || 'button'}>
			<i className={"fa fa-"+icon} aria-hidden={true}></i>
			{" "+label}
		</button>

		) 
}

export default Button;