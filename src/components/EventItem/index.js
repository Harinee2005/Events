import {Component} from 'react'
import './index.css'

class EventItem extends Component {
  onClickEvent = () => {
    const {details, onEventClicking} = this.props
    const {registrationStatus, id} = details
    onEventClicking(registrationStatus, id)
  }

  render() {
    const {details, activeEventImage} = this.props
    const {imageUrl, name, location, id} = details
    const style = id === activeEventImage ? 'border' : ''
    return (
      <li className="event-item">
        <button className="btn-event" type="button" onClick={this.onClickEvent}>
          <img className={`event-img ${style}`} src={imageUrl} alt="event" />
        </button>

        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </li>
    )
  }
}

export default EventItem
