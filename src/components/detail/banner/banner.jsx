import React from 'react';
import EditField from '../../common/editField';



const Banner = props => {
	const {image_url, title} = props.recipes.selected;
	return (

		<div className='banner'>			
			<img src= {image_url}/>
			<div className ='banner-content'>
				<EditField fieldType="title" value={title}>
					<h1 id="banner-title" title='Click to edit'>{title}</h1>
				</EditField>
			</div>
		</div>
		)
}

export default Banner;

// <BannerMenu index={index} list={props.list} href={source_url}  pending={props.pending}/>