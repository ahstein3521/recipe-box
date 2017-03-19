import React,{Component} from 'react';
import SideNav from './index.jsx';
import Button from '../common/button.jsx';

export default class SlidingMenu extends Component{
	constructor(props){
		super(props);
		this.updateDimensions = this.updateDimensions.bind(this);
	}
	renderFixed(){
		return <div className='slider slider-fixed'>{this.props.children}</div>
	}
	
	renderIcon(){
		return <Button className = 'toggle-btn' onClick = {()=> this.props.dispatcher("OPEN_MENU")} icon="bars"/>
		      
	}
	renderMenu(){
		return(
			<div className="slider slider-mobile">
				<Button className = 'toggle-btn' onClick = {()=> this.props.dispatcher("CLOSE_MENU")} icon="remove"/>
				{this.props.children}
			</div>
		)
	}
	updateDimensions(){
		this.props.updateScreenWidth(window.innerWidth);
	}
	componentDidMount(){
		this.updateDimensions()
		
		window.addEventListener("resize", this.updateDimensions)
	}
	componentWillUnmount(){
		window.removeEventListener("resize");
	}
	render(){
		if( this.props.menu.fixedPosition) return this.renderFixed()
		else if(this.props.menu.open) return this.renderMenu()
		else return this.renderIcon();
		}
} 
