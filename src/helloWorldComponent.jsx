import React from 'react'
import "./helloWorldComponent.scss"

export const HellowWorldComponent = () => {
  const greetingsSource = 'desde React!!'
  return(
    <div className='bg-color'>
      <h1>Hola Lemoncoders desde {greetingsSource}</h1>
    </div>
  )
}