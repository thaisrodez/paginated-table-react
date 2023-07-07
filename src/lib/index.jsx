import React from 'react'
import PropTypes from 'prop-types'

export default function HelloWorld({greetee}) {

  return (
    <div>Hello, {greetee}!</div>
  )
}

HelloWorld.propTypes = {
  greetee: PropTypes.string
}
