import React, { Component } from 'react';
import {connect} from 'react-redux';

import SearchResultList from '../search/resultList/index.jsx';
import RecipeDetail from '../detail/index.jsx';

class Selected extends Component {


  render() {
    const {selected, list} = this.props.recipes
    const {search, pending} = this.props;
  
    if (!selected && search.hidden) {
      return <noscript/>;
    }
    else if(!search.hidden){
      return <SearchResultList {...this.props}/>
    }
    else{
      return <RecipeDetail {...this.props}/>
    }
  }
}

function mapStateToProps(state) {
  
  return {...state};
}


export default connect(mapStateToProps)(Selected);