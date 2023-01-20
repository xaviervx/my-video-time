import React from 'react';

import PropTypes from 'prop-types';

export function ErrorMessage({ errorText, color }) {
  return (
    <p className={ `text-xs my-3 ${ color } ` }>{ errorText }</p>
  )
}

ErrorMessage.propTypes = {
  errorText: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}
