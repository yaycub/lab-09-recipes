import Component from '../Component.js';

class RecipeItem extends Component {

  renderHTML() {
    const recipe = this.props.recipe;

    return `
            <li class="recipe-item">
                <a href="../recipe/recipe.html?id=${recipe.id}">${recipe.name}</a>
            </li>
        `;
  }
}

export default RecipeItem;
