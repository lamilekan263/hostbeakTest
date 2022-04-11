import React from 'react'

const DateInput = () => {
  return (
      <input className="px-2 py-1 border border-solid border-gray-300 w-full" type="date" id="start" name="trip-start"
          value="2018-07-22"
          min="2018-01-01" max="2018-12-31"/>
  )
}

export default DateInput