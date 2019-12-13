import Component from '../Component.js';
import Header from '../common/Header.js';
import RecipeDetailItem from './RecipeDetailItem.js';
import { getRecipe } from '../services/recipes.js';

class DetailApp extends Component {
  async onRender(dom){
    const header = new Header();
    dom.prepend(header.renderDOM());

    const main = dom.querySelector('main');

    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');

    try {
      const recipe = await getRecipe(id);
      const recipeItem = new RecipeDetailItem({ recipe });

      main.appendChild(recipeItem.renderDOM());
    }
    catch(err){
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }

  renderHTML() {
    return /*html*/ `
        <div>
            <p class="error"></p>
            <main>

            </main>
        </div>
    `;
  }
}

export default DetailApp;
