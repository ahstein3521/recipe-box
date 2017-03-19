export default function(state = {open:true, fixedPosition:true}, action) {
  switch(action.type) {
  case 'OPEN_MENU':
  	return {...state, open:true}
  case 'CLOSE_MENU':
  	return {...state, open:false}
  case 'UPDATE_SCREEN_WIDTH':
  	return {...state, fixedPosition:action.payload}		
  }
  return state;
}