import * as React from "react"
import { storiesOf } from "@storybook/react"

const stories = storiesOf("Styles/Components/Input", module)

stories.add("Basic Inputs", () => (
  <div className="max-w-lg mx-auto">
    <input type="text" className="input" placeholder="Tourepedia Holidays" />
    <textarea
      className="input"
      placeholder="Tourepedia provides best tourism services in Rajasthan, Sikkim, Bhutan, Kerla. Reach out to bookings@tourepedia.com to submit your query."
    />
    <select className="input">
      <option value="">Select a value...</option>
      <option value={1}>Value One</option>
    </select>
    <label>
      <input type="checkbox" className="input" /> Select Me
    </label>
  </div>
))

stories.add("Form Groups", () => (
  <div className="max-w-lg mx-auto">
    <div className="form-group">
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        className="input"
        id="name"
        placeholder="Johnny Cage"
      />
    </div>
    <div className="form-group">
      <label htmlFor="description">Trip Description</label>
      <textarea
        className="input"
        id="description"
        placeholder="Any comments regarding your trip e.g. This is a family gathering trip and we would like to spent most of the time in hotel"
      />
    </div>
    <div className="form-group">
      <label htmlFor="hotel_preference">Hotel Preference</label>
      <select className="input" name="hotel_preference">
        <option value="">Select a value...</option>
        <option value={"5"}>5 Star</option>
        <option value={"4"}>4 Star</option>
      </select>
    </div>
    <div className="form-group">
      <label>
        <input
          type="checkbox"
          className="input"
          name="includes[]"
          value="flight-tickets"
        />{" "}
        Booking Flight Tickets
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          className="input"
          name="includes[]"
          value="local_sightseeing"
        />{" "}
        Local Sightseeing
      </label>
    </div>
  </div>
))

stories.add("With Error", () => {
  return (
    <div className=" max-w-md mx-auto">
      <div className="form-group has-error">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="input"
          placeholder="Johnny Cage"
        />
        <div className="error-message">Please provide your name</div>
      </div>
      <div className="form-group has-error">
        <label htmlFor="description">Description</label>
        <textarea id="description" className="input" />
        <div className="error-message">Description field is required</div>
      </div>
      <div className="form-group has-error">
        <label htmlFor="hotel_preference">Hotel Preference</label>
        <select className="input" name="hotel_preference">
          <option value="">Select a value...</option>
          <option value={"5"}>5 Star</option>
          <option value={"4"}>4 Star</option>
        </select>
        <div className="error-message">Please select a hotel preference</div>
      </div>
    </div>
  )
})
