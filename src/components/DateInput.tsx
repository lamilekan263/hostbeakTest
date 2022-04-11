import React from 'react'

const DateInput = () => {
  return (
      <input
          value="2018-07-22"
          min="2018-01-01" max="2018-12-31"
          type="date"
          className=" border b text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
          placeholder="Select date" />
  )
}

export default DateInput


