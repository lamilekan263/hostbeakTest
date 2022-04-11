import React from 'react'


interface SelectOptionInterface{
    options: string[]
}

const SelectOption = (props: SelectOptionInterface) => {

    const {options } = props
  return (
      <select className="p-2 border border-solid border-gray-300 w-full">
          {options.map((option, index) => <option key={index}>{option}</option>)}

      </select>
  )
}

export default SelectOption