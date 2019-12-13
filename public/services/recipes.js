const URL = 'https://lab-recipe-backend.herokuapp.com/api/v1/recipes';

export async function getRecipes() { 
  // let queryString = window.location.hash.slice(1);
  const url = `${URL}`;

  const response = await fetch(url);
    
  return response;
}
