import React,{Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteRecipe, updatePending } from '../../../actions/index';

import Button from '../../common/button.jsx';


const menuItems = [
	{icon:"plus",className:"add-btn", action:"addIngredient",content:"Add ingredient" },
	{icon:"trash",className:"delete-btn", action:"deleteRecipe",content:"Delete Recipe" }
]

class BannerMenu extends Component{

	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(action){
		return this[action]()
	}

	addIngredient(){
		
		 let pending = this.props.recipes.pending
		const update = pending.concat("");
		
		this.props.updatePending(update);
	}

	deleteRecipe(){
		const {deleteRecipe, recipes:{list,selected}} = this.props;
		const message = "Are you sure you want to permanently delete this recipe?";
		if(confirm(message)) deleteRecipe(list, selected.index);
	}
	
	renderItem(){
		return menuItems.map((item,i) => (
				<div className='option' key={i}  onClick={()=>this.onClick(item.action)}>
					<Button {...item}/>
				</div>		
		))
	}
	
	render(){
		const source_url =  this.props.recipes.selected.source_url;
		return(
			<div className='option-panel'>
				<div className='option' title={source_url}>
					<a href={source_url} target="_blank">
						<Button className = 'link-btn' content = "Get Directions" icon='list'  onClick={()=> (null)}/>
					</a>
				</div>	
				{this.renderItem()}
			</div>
			)
	}

}

function mapDispatchToProps(dispatch){
	return bindActionCreators({deleteRecipe, updatePending},dispatch)
}

export default connect(null,mapDispatchToProps)(BannerMenu)