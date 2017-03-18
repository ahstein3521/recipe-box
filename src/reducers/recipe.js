const defaultState = {list:[], selected:null,editing:[]}

export default function(state = defaultState, action) {
  const {payload, type, index, editing, pending} = action;

  switch(type) {
  case 'FETCH_LIST':
      return {...state, list:payload}
  case 'SELECT_RECIPE':
  	return {...state, selected:{...state.list[index],index}, editing, pending}
  case 'DESELECT_RECIPE':
    return {...state, selected:null}  
  case 'DELETE_RECIPE':
  	return {...state, list:payload, selected:null}		
  case 'UPDATE_LIST':
    return {...state, list:payload, selected:{...payload[index],index }}; 
  case 'TOGGLE_EDIT':
  	return {...state, editing:{...payload}}	 	 
  case 'UPDATE_PENDING':
    return {...state, pending:[...payload]}
  case 'IMPORT_RECIPE':
    return {...state, list:payload}        
}

  return state;
}