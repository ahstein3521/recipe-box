
export default function(state = {hidden:true, history:[]}, action) {
  const {type, payload, update, query} = action;
  switch(action.type){
  	case 'SUBMIT_QUERY':
    	return {...state, query, results:payload, history:update, error:false, hidden:false}; 
    case 'HIDE_SEARCH_RESULTS':
    	return {...state, hidden:true, query:null}
    case 'SELECT_QUERY':
    	return {...state, ...payload}
    case 'FETCH_HISTORY':
    	return {...state, history:payload}
    case 'SEARCH_ERROR':
    	return {...state, error:true, hidden:false, message:payload}			 
  }
  return state;
}