// Appointment.js
import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointment extends Component {
  state = {
    liked: false,
    title: '',
    date: '',
    appointmentItem: [],
    appointmentStarted: false,
  }

  onStartedAppointment = () => {
    this.setState(prevState => ({
      appointmentStarted: !prevState.appointmentStarted,
    }))
  }

  onAddTitle = event => {
    this.setState({ title: event.target.value })
  }

  onChangeDate = event => {
    this.setState({ date: event.target.value })
  }

  handleToggleLike = () => {
    this.setState(prevState => ({
      liked: !prevState.liked,
    }))
  }

  onAddAppointment = event => {
    event.preventDefault()
    const { title, date } = this.state

    if (title.trim() && date !== '') {
      const newAppointment = {
        id: uuidv4(),
        date: date,
        title: title,
        liked: false,
      }

      this.setState(prevState => ({
        appointmentItem: [...prevState.appointmentItem, newAppointment],
        title: '',
        date: '',
      }))
    }
  }

  render() {
    const { title, date, appointmentItem, appointmentStarted } = this.state
    return (
      <div className="main-container">
        <div className="Appointment-container">
          <div className="add-container">
            <div className="input-container">
              <h1 className="heading">Add Appointment</h1>
              <label className="input-label" htmlFor="input-title">
                TITLE
              </label>
              <input
                value={title}
                onChange={this.onAddTitle}
                id="input-title"
                className="input-Title"
                placeholder="Title"
                type="text"
              />

              <label className="date-label" htmlFor="input-Date">
                Date
              </label>
              <input
                value={date}
                onChange={this.onChangeDate}
                id="input-Date"
                type="date"
              />

              <button
                onClick={this.onAddAppointment}
                type="button"
                className="add-button"
              >
                {' '}
                Add{' '}
              </button>
            </div>
            <div className="image-container">
              <img
                className="appointment-img"
                alt="appointments"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              />
            </div>
          </div>
          <span className="line">
            <hr />
          </span>
          <div className="started-Container">
            <h1 className="heading">Appointment</h1>
            <button
              onClick={this.onStartedAppointment}
              type="button"
              className="btn-Element"
            >
              {' '}
              Starred{' '}
            </button>
          </div>
        </div>
        <ul className="list-Of-Items">
          {appointmentItem.map(eachappointment => (
            <AppointmentItem
              key={eachappointment.id}
              appointment={eachappointment}
              onToggleLike={this.handleToggleLike}
              appointmentStarted={appointmentStarted}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Appointment
