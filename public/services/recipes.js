const URL = 'https://lab-recipe-backend.herokuapp.com/api/v1/recipes';

export async function getRecipes() { 
  // let queryString = window.location.hash.slice(1);
  const url = `${URL}`;

  const response = await fetch(url);
  const data = await response.json();
    
  return data;
}

export async function getRecipe(id){
  const url = `${URL}/${id}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}
