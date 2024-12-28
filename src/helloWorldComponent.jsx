import React from 'react'
import * as classes from "./helloWorldComponent.scss"

export const HellowWorldComponent = () => {
  const greetingsSource = 'desde React!!'
  return(
    <div className={classes.bgColor}>
      <h1>Hola Lemoncoders {greetingsSource}</h1>
    </div>
  )
}