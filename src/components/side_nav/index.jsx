import React,{Component} from 'react';
import RecipeList from './list.jsx';
import NavButton from './navButton.jsx';
import SearchView from './searchView.jsx';
import SlidingMenu from './menu.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../actions'

const NavItems = ['Library','Search'];

class SideNav extends Component{

	constructor(props){
		super(props)
		this.onClick = this.onClick.bind(this);
		this.state = {view:"Library"}
	}
	onClick(view){
		this.setState({view})
	}
		
	renderView(){
		if(this.state.view == 'Library') return <RecipeList {...this.props}/>
		else return <SearchView {...this.props}/>
	}

	renderNav(){
		const {view} = this.state;
		return NavItems.map(label => (
			<NavButton label={label} key={label} onClick={this.onClick} selected={view == label}/>
			)
		)
	}

	render(){
		return(
		<SlidingMenu menu = {this.props.menu} updateScreenWidth={this.props.updateScreenWidth} dispatcher ={this.props.dispatcher}>
			<div id="side-bar">
				<h1>Recipe Box</h1>
				<div className='btn-panel'> {this.renderNav()} </div>	
				{ this.renderView() }
			</div>
		</SlidingMenu>
		
		)
	}
}

function mapStateToProps(state){
	console.log(state)
	return {...state}
}

function mapDispatch(dispatch){
	return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps,mapDispatch)(SideNav)