import React from 'react';


import Banner from './banner/banner.jsx';
import IngredientList from './ingredients/list.jsx'
import RecipeContentHeader from './header/index.jsx';

const RecipeDetail = props =>  (
      <div id='main'>
        <Banner {...props}/>
        <div id='selected-content'>
        	<RecipeContentHeader {...props}/>
        	<IngredientList {...props}/>
        </div>
      </div>
    )
  
export default RecipeDetail;