import React, { useState } from 'react'


interface InputInterface {

  type: string,
  onChange: (value: any) => void,
  placeholder: string,
  label: string,
}

const Input = (props: InputInterface) => {
  const [isMyInputFocused, setIsMyInputFocused] = useState(false);

  console.log(isMyInputFocused);
  
  const { type, onChange, placeholder,label } = props
  return (
    <div className="my-1 py-3  w-full">
      <label className="text-[#82869A] font-normal text-sm">{label }</label>
      <input onFocus={() => setIsMyInputFocused(true)} className={`w-full py-2 text-[#373C56] font-semibold text-md outline-0 border-x-0 border-b-2  ${isMyInputFocused ? "border-mezechBlue" : "border-[#EBEBEB]"} font-roobert placeholder:font-normal placeholder:text-[#82869A]`} type={ type} onChange={onChange } placeholder={placeholder} />
    </div>
  )
}

export default Input