import React from 'react';

import PropTypes from 'prop-types';

export function ErrorText({ text, color }) {
  return (
    <p className={ `text-xs my-3 ${ color }` }>{text}</p>
  )
}

ErrorText.prototype = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
