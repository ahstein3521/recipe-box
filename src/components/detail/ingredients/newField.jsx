import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../../common/button.jsx';

import { updateList, updatePending} from '../../../actions/index';

class NewIngredient extends Component{

	constructor(props){
		super(props);
		this.onDelete = this.onDelete.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSave = this.onSave.bind(this);
	}

	onChange(e,i){
		const { pending } = this.props;
		const update = e.target.value;

		let [...Pending] = pending;
		Pending[i] = update;

		this.props.updatePending(Pending);
		
	}

	onSave(i){
		const update = this.props.pending[i];
		const [...list] = this.props.list; 
		let {...selected} = this.props.selected;

		selected.ingredients.push(update);

		this.props.updateList(list,selected);
		this.onDelete(i);

	}
	onDelete(index){
		let [...pending] = this.props.pending 
		pending.splice(index,1)
		this.props.updatePending(pending);
	}
	
	render(){
		return ( 
			<span>
			{
				this.props.pending.map((value,i) => (
					<div className='edit-field' key={i}>
						<input type='text' value={value} onChange={(e) => this.onChange(e,i)}/>
						<Button className='save-btn' onClick={()=> this.onSave(i)} icon='plus' text='Save'/>
						<Button className='cancel-btn' onClick={() => {this.onDelete(i)}} icon='remove' text='Delete'/>
					</div>
					)
				)
			}
			</span>
		)
	}
}

function mapStateToProps({recipes}) {
	const {selected,pending,list} = recipes;
  return {pending, selected, list};
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateList, updatePending}, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(NewIngredient);