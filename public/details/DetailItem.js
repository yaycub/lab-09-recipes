import Component from '../Component.js';

class DirectionsItem extends Component {
  renderHTML(){
    const detail = this.props.direction;

    return `
    <li class ="detail-item">${detail}</li>
    `;
  }
}

export default DirectionsItem;
