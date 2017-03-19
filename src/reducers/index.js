import { combineReducers } from 'redux';

import menuReducer from './menu';
import recipeReducer from './recipe';
import searchReducer from './search';

const rootReducer = combineReducers({
  menu:menuReducer,	
  recipes:recipeReducer,
  search:searchReducer
});

export default rootReducer;
