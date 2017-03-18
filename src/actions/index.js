import fetchJsonp from 'fetch-jsonp'
import api from '../../secret';
import defaultList from './defaultList';
import {formatResponse,handleSubmit} from './yummly';
const root_url = 'https://api.yummly.com/v1/api';

export function dispatcher(type){
	return {type}
}//for when a reducer only requires 'action.type' to update state;

export function fetchList(){
	let list = localStorage.getItem("recipeList");
	if(!list) list = defaultList;
	else list = JSON.parse(list);

	return {type:"FETCH_LIST",payload:list}
}

export function fetchHistory(){
	let list = localStorage.getItem("searchHistory");
	if(!list) list = [];
	else list = JSON.parse(list);

	return {type:"FETCH_HISTORY",payload:list}	
}

export function selectRecipe(index){
	const editing = {title:false, image_url:false, ingredients: Array(30).fill(false)} 
	return {type:"SELECT_RECIPE",editing, pending:[], index}
		//reset all toggled edit fields if a new recipe has been selected
}

export function selectQuery(index,list){
	const selected = list[index];
	const payload = {query:selected.query, results:selected.results, hidden:false}
	
	return {type:"SELECT_QUERY", payload}
}

export function updateList(list, {index,pending, ...update}){
	list.splice(index, 1, update);
	localStorage.setItem("recipeList",JSON.stringify(list));
	return{ type:"UPDATE_LIST", payload : list, pending, index }
}

export function deleteRecipe(_list, index){
	let list = [..._list];
	list.splice(index, 1);
	localStorage.setItem("recipeList", JSON.stringify(list));
	return {type:"DELETE_RECIPE", payload:list}
}

export function updatePending(payload){
	return {type:'UPDATE_PENDING', payload}
}

export function toggleEditMode(newState){
	return { type:"TOGGLE_EDIT", payload:newState }
}

export function submitQuery(q, list){

	const url = `${root_url}/recipes?_app_id=${api.appId}&_app_key=${api.key}&q=${q}`

	return function(dispatch){

		fetchJsonp(url)
			.then(res => res.json())
			.then(handleSubmit)
			.then(results => {
				const update = [{query:q, results}, ...list]
				localStorage.setItem("searchHistory", JSON.stringify(update))
				dispatch({type:"SUBMIT_QUERY",payload: results, query:q, update});
			})
			.catch(err => {
				const message = `There are no results for ${q}`;
				dispatch({type:"SEARCH_ERROR", payload:message})
			})		
	}
}

export function importRecipe(list, id){
	const url = `${root_url}/recipe/${id}?_app_id=${api.appId}&_app_key=${api.key}`
	
	return function(dispatch){
		fetchJsonp(url)
			.then(res => res.json())
			.then(formatResponse)
			.then(recipe => {
				const payload = [recipe, ...list];
				localStorage.setItem("recipeList",JSON.stringify(payload))
				dispatch({type:"IMPORT_RECIPE",payload})
			})
	}
}



