import './index.css'

const eventStatusConstants = {
  initial: 'INITIAL',
  registrationClosed: 'REGISTRATIONS_CLOSED',
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
}

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props

  const initialView = () => (
    <p className="initial-text">
      Click on an event, to view its registration details
    </p>
  )

  const yetToRegisterView = () => (
    <div className="yet-to-reg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
        alt="yet to register"
        className="yet-to-reg-img"
      />
      <p className="yet-to-reg-para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="yet-to-reg-btn" type="button">
        Register Here
      </button>
    </div>
  )

  const registeredView = () => (
    <div className="reg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="reg-img"
      />
      <h1 className="initial-text">You have already registered for the event</h1>
    </div>
  )

  const registrationClosedView = () => (
    <div className="reg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="reg-closed-img"
      />
      <h1 className="initial-text">Registrations Are Closed Now!</h1>
      <p className="yet-to-reg-para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  switch (eventStatus) {
    case eventStatusConstants.initial:
      return initialView()
    case eventStatusConstants.yetToRegister:
      return yetToRegisterView()
    case eventStatusConstants.registered:
      return registeredView()
    case eventStatusConstants.registrationClosed:
      return registrationClosedView()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
