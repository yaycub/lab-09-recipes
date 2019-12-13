import Component from '../Component.js';
import RecipeItem from './RecipeItem.js';

class RecipeList extends Component {
    
  onRender(list) {
    const recipes = this.props.recipes;

    recipes.forEach(recipe => {
      const recipeItem = new RecipeItem({ recipe });
      list.appendChild(recipeItem.renderDOM());
    });        
  }
  renderHTML() {
    return `
            <ul class="recipe-list"></ul>
        `;
  }
}

export default RecipeList;
