import React from 'react'

const Button = ({children, version, type, isDisabled}) => {
  return (
    <button t
      ype={type} 
      disabled={isDisabled} 
      className={` btn btn-${version}`}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  disabled: 'false'
}

export default Button