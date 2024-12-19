import React from 'react'
import * as classes from "./helloWorldComponent.scss"

export const HellowWorldComponent = () => {
  const greetingsSource = 'desde React!!'
  return(
    <div className={classes['bg-color']}>
      <h1>Hola Lemoncoders desde {greetingsSource}</h1>
    </div>
  )
}