import Component from '../Component.js';

class EventItem extends Component {
  renderHTML(){
    const event = this.props.event;

    return `
    <ul>
      <li>${event.month} ${event.day}, ${event.year}</li>
      <li>Rating: ${event.rating}</li>
      <li>Notes: ${event.notes}</li>
    </ul>
    `;
  }
}

export default EventItem;
