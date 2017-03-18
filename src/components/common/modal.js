import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Ingredient from './ingredient'
import {closeModal, editIngredient} from '../actions/index';

class Modal extends Component{
	constructor(props){
		super(props);
		this.editIngredient = this.editIngredient.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.cancelEdit = this.cancelEdit.bind(this);
	}
	editIngredient(event,index){
		event.preventDefault();
		
		let {ingredients} = this.props.recipe.selected
		ingredients[index].selected = true;

		this.props.editIngredient(Object.assign({},this.props.recipe.selected, {ingredients}));
	}
	cancelEdit(event, index){
		let {ingredients} = this.props.recipe.selected
		ingredients[index].selected = false;

		this.props.editIngredient(Object.assign({},this.props.recipe.selected, {ingredients}));	
	}
	closeModal(e){
		e.preventDefault();
		this.props.closeModal();
	}
	render(){
		
		if(!this.props.recipe|| !this.props.modal || !this.props.modal.modalSelected) return (<span></span>)

			const {selected} = this.props.recipe;
		
		return <div id='modal'>
			<div id='modal-overlay'></div>
			<div id='modal-content'>
				<div id='modal-form'>
				<h3>Edit Recipe</h3>
				<form>
					<div className='form-group'>
						<label htmlFor='title'>Name:</label>
						<input name='title' className='form-control' type='text' defaultValue = {selected.title}/>
					</div>
					<div className='form-group'>
						<label htmlFor='image_url'>Image URL:</label>
						<input name='image_url' className='form-control' type='text' defaultValue = {selected.image_url}/>
					</div>
					<label>Ingredients:</label>	
					{
						selected.ingredients.map(({ingredient,selected},i) => <Ingredient selected = {selected} key={i} 
							onCancel = {(x)=> {this.cancelEdit(x,i)}}
							onSelect={(x)=>{this.editIngredient(x,i)}} val = {ingredient}/>)
					}
					<div className='form-group'>	
							<button className='btn' onClick={(x)=>this.closeModal(x)}>Cancel</button>	
					</div>											
				</form>
			</div></div>
		</div>
	}




}

function mapStateToProps({recipe,recipeList,modal}) {
  return {recipe,recipeList, modal};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({closeModal,editIngredient}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);