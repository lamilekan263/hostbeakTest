import React from 'react'


interface SelectOptionInterface{
    options: string[]
}

const SelectOption = (props: SelectOptionInterface) => {

    const {options } = props
  return (
      <select className=" border b text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-2 px-5 w-full  ">
          {options.map((option, index) => <option key={index}>{option}</option>)}

      </select>
  )
}

export default SelectOption