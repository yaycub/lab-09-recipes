import Component from '../Component.js';
import DirectionsItem from './DetailItem.js';
import EventItem from './EventItem.js';

class RecipeDetailItem extends Component{
  onRender(dom){
    const direction = this.props.recipe.directions;
    const directionDom = dom.querySelector('.directions');
    direction.forEach(direction => {
      const directionItem = new DirectionsItem({ direction });
      directionDom.appendChild(directionItem.renderDOM());
    });

    const events = this.props.recipe.events;
    const eventDom = dom.querySelector('.events');
    events.forEach(event => {
      const eventItem = new EventItem({ event });
      eventDom.appendChild(eventItem.renderDOM());
    });
  }

  renderHTML(){
    const recipe = this.props.recipe;

    return `
    <li class = "recipe-item">
      <p>${recipe.name}</p>
      <ol class = "directions"></ol>
      <p class = "events"></p>
    </li>
    
    `;
  }
}

export default RecipeDetailItem;
