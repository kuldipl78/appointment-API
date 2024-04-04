// AppointmentItem.js
import React from 'react'
import './index.css'

const AppointmentItem = props => {
  const { appointment, onToggleLike } = props
  const { id, title, date, liked } = appointment

  const onStarImage = () => {
    onToggleLike(!liked)
  }

  return (
    <div className="items">
      <li className="list-items">
        <div className="appointment-section">
          <h1 className="title-appointment">{title}</h1>
          <button onClick={onStarImage}>
            {liked ? (
              <img src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png" alt="Starred" />
            ) : (
              <img src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png" alt="Not Starred" />
            )}
          </button>
        </div>
        <p>{date}</p>
      </li>
    </div>
  )
}

export default AppointmentItem
