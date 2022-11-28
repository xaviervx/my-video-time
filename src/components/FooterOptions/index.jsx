/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import PropTypes from 'prop-types';

export function FooterOptions(props) {
  const { options, title, footerOptionClass } = props;

  return (
    <ul className={ footerOptionClass }>
      <li className="mb-4"><a href="#" className="font-bold">{title}</a></li>

      {options.map((item, key) => (
        <li key={ key }><a href="#">{item}</a></li>
      ))}
    </ul>
  );
}

FooterOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  footerOptionClass: PropTypes.string.isRequired
}
