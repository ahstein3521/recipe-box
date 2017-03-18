
function getImage(img){
	const images = img[0];
	if(images.hostedLargeUrl) return images.hostedLargeUrl
	else if(images.hostedMediumUrl) return images.hostedMediumUrl;
	else return images.hostedSmallUrl;
}

export function handleSubmit({matches, totalMatchCount}){
	if(!totalMatchCount) return Promise.reject();
	const defaultImage = ""
	const results = matches.map(match => {
		return {
			title:match.recipeName,
			image_url: match.smallImageUrls[0] || defaultImage,
			recipe_id: match.id
		}
	})

	return Promise.resolve(results);
}

export function formatResponse(data){
	const {id, name, ingredientLines, source, images, flavors, prepTime, cookTime, totalTime, attribution} = data;
	const image_url = getImage(images);
	const source_url = source.sourceRecipeUrl;

	const payload = {title:name, recipe_id:id, ingredients:ingredientLines, 
					 image_url, source_url, flavors, prepTime, cookTime, totalTime, attribution};

	return Promise.resolve(payload)
}

