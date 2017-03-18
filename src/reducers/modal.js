export default function(state = {modalSelected:false}, action) {
  switch(action.type) {
  case 'CLOSE_MODAL':
  	return Object.assign({}, state, {modalSelected:false}) 
  case 'EDIT_RECIPE':
  	return Object.assign({}, state, {modalSelected:true}) 
  case 'NEW_RECIPE':
  	return Object.assign({}, state, {modalSelected:true, newRecipe:true})
  }
  return state;
}