import React from 'react'

interface TitleProps {
    title: string;
}

const Title = (props: TitleProps) => {
  return (
      <div className="mb-5">
          <h1 className="font-inter text-4xl font-bold">{ props.title }</h1>
    </div>
  )
}

export default Title