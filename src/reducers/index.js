import { combineReducers } from 'redux';

import recipeReducer from './recipe';
import searchReducer from './search';

const rootReducer = combineReducers({
  recipes:recipeReducer,
  search:searchReducer
});

export default rootReducer;
