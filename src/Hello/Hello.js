import React from 'react'

const Hello = ({ name, big }) => {
  if (big) {
    return <h1>안녕하세요, ${name}</h1>
  }
  return <p>안녕하세요. ${nmae}</p>
}

export default Hello
