
import React from 'react';
import { Component } from 'react';

import SideNav from './side_nav/index.jsx';
import RecipeDetail from './selected/index.jsx';
// import Modal from './modal';

export default class App extends Component {
  render() {
    return (
      <div id = "wrapper">
      	<SideNav/>
      	<RecipeDetail/>
      </div>
    );
  }
}
