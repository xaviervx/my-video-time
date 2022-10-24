import { useEffect } from "react"

import PropTypes from "prop-types"

function TextAlert(props) {
  const { message, color } = props

  useEffect(() => {
    console.warn('OI')
    return () => {
      console.warn('TCHAU')
    }
  }, [])

  return (
    <span style={{ color: color, fontWeight: 'bold' }} >{message}</span>
  )
}

TextAlert.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string
}

TextAlert.defaultProps = {
  color: '#f44333'
}

export default TextAlert
