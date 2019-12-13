import Component from '../Component.js';

class RecipeItem extends Component {

  renderHTML() {
    const recipe = this.props.recipe;

    return `
            <li class="recipe-item">
                <a href="./recipe.html?id=${recipe._id}">${recipe.name}</a>
            </li>
        `;
  }
}

export default RecipeItem;
