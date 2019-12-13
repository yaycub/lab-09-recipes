import Component from '../Component.js';
import Header from './Header.js';
import RecipeList from './RecipeList.js';
import { getRecipes } from '../services/recipes.js';

class RecipeApp extends Component {

  async onRender(dom) {
    const header = new Header({ title: 'Recipe List' });
    dom.prepend(header.renderDOM());
        
    const main = dom.querySelector('main');
    const error = dom.querySelector('.error');

    const recipeList = new RecipeList({ 
      recipes: [],
    });

    main.appendChild(recipeList.renderDOM());

    try {
      const recipes = await getRecipes();
      this.state.recipes = recipes;

      recipeList.update({ recipes });
    }
    catch(err) {
      error.textContent = err;
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }

  renderHTML() {
    return /*html*/`
            <div>
                <p class="error"></p>
                <main>
                </main>
            </div>
        `;
  }
}

export default RecipeApp;
