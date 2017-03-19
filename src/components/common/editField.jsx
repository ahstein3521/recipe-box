import React,{Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {toggleEditMode, updateList} from '../../actions/index';
import Button from './button.jsx';

class EditField extends Component{

	constructor(props){
		super(props);
		this.renderInput = this.renderInput.bind(this);
		this.isSelected = this.isSelected.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.onSave = this.onSave.bind(this);
		this.state = {text:this.props.value}
	}

	renderInput(){
		return( 

		<div className='edit-field'>
			<input type='text' defaultValue={this.state.text} onChange={e=> this.setState({text:e.target.value})}/>
			<Button onClick={this.onSave} className='save-btn' icon='floppy-o' text='Update '/>
			<Button onClick={this.handleClick} className='cancel-btn' icon='times' text='Cancel' />
		</div>
		)
	}


	handleClick(e){
		const {fieldType,index, editing} = this.props
		let newState = {...editing};
		
		if(typeof index == 'number') newState[fieldType][index] = !newState[fieldType][index];
		else newState[fieldType] = !newState[fieldType];

		this.setState({text:this.props.value}) //reset text value to inherited props when toggling
    	this.props.toggleEditMode(newState);
	}
	
	onSave(){
		const {fieldType, index} = this.props;
		const update = this.state.text.trim();
		const [...list] = this.props.list;
    	let {...recipe} = this.props.selected;

    	if(!update.length) return this.handleEmptySubmit(recipe, list, fieldType, index);

    	if(typeof index == 'number') recipe[fieldType][index] = update;
    	else  recipe[fieldType] = update;

    	this.props.updateList(list,recipe)
    	this.handleClick();
	}

	handleEmptySubmit(recipe, list, type,index){
		if(type=='ingredients') recipe.ingredients.splice(index,1);

		else if(type == 'title') recipe.title = 'Untitled Recipe';
		else recipe.image_url = "http://placehold.it/200x150"

		this.props.updateList(list,recipe);
		this.handleClick();
	}


	isSelected(){
		const {fieldType,index, editing} = this.props;

		if(typeof index === 'number') return editing[fieldType][index]
		else return editing[fieldType];
	}

		
	render(){
		
		if(this.isSelected()){
			return this.renderInput()
		}else{
			return <span onClick={this.handleClick} className='text-wrapper'>
				{this.props.children}
				<br/>
			</span>
		}
	}
}

function mapStateToProps({recipes}) {
  const {selected,list,editing} = recipes;

  return {
    editing,
    selected,
    list
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({toggleEditMode,updateList}, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(EditField);