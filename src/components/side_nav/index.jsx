import React,{Component} from 'react';
import RecipeList from './list.jsx';
import NavButton from './navButton.jsx';
import SearchView from './searchView.jsx';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../actions'

const NavItems = ['Library','Search'];

class SideNav extends Component{

	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
		this.onresize = this.onresize.bind(this);
		this.onToggleMenu = this.onToggleMenu.bind(this);
		this.state = {view:"Library", elementId:"side-bar", elementClass:""}
	}
	onClick(view){
		this.setState({view})
	}
	onToggleMenu(){
		let {elementClass,elementId} = this.state;
		elementClass = (elementClass == 'side-bar-closed')? 'side-bar-opened' : 'side-bar-closed';
		elementId = (elementClass == 'side-bar-closed')? "side-bar-mobile-hidden" : "side-bar-mobile";
		this.setState({elementClass,elementId});
	}
	onresize (){
	    if (this.rqf) return
	    if( typeof window !== 'undefined' )
	      this.rqf = window.requestAnimationFrame(() => {
	        this.rqf = null
	        this.getDimensions()
	      })
	}	
	
	renderView(){
		if(this.state.view == 'Library') return <RecipeList {...this.props}/>
		else return <SearchView {...this.props}/>
	}
	renderToggleBtn(){
		if(this.state.elementId == 'side-bar') return <noScript/>;
		return <button id="toggle-btn" onClick = {this.onToggleMenu}>Toggle Menu</button>

	}
	renderNav(){
		const {view} = this.state;
		return NavItems.map(label => (
			<NavButton label={label} key={label} onClick={this.onClick} selected={view == label}/>
			)
		)
	}
	getDimensions(){
		const screenWidth = window.innerWidth;
		const elementId = screenWidth > 780 ? "side-bar" : "side-bar-mobile"
		const elementClass = screenWidth > 780? this.state.elementClass : "";
		this.setState({screen, elementId,elementClass});
	}
	componentDidMount(){
		this.getDimensions();
		window.addEventListener("resize", this.onresize)
	}
	componentWillUnmount(){
		window.removeEventListener("resize");
	}

	render(){
		return(
		<span>
		{this.renderToggleBtn()}	
		<div id={this.state.elementId} className={this.state.elementClass}>
			<h1>Recipe Box</h1>
			<div className='btn-panel'> {this.renderNav()} </div>	
			{ this.renderView() }
		</div>
		</span>
		)
	}
}

function mapStateToProps(state){
	return {...state}
}

function mapDispatch(dispatch){
	return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps,mapDispatch)(SideNav)