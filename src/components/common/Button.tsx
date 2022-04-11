import React from 'react'

interface ButtonInterface {
    title: string,
    onClick: () => void
}

const Button = (props: ButtonInterface) => {
    const { title, onClick } = props
  return (
      <button className="w-full" onClick={onClick }>{ title}</button>
  )
}

export default Button