import React from 'react';

import PropTypes from 'prop-types';

export function InputText({
  width, height, margimTop, margimBottom, placeholder, icon, type, onChange
}) {
  return (
    <div className={ `relative ${ width } ${ height } ${ margimTop } ${ margimBottom } border-b border-[#707070]` }>
      <button type="button" className="absolute h-auto w-auto mt-1 z-10 cursor-none">
        {icon}
      </button>
      <input
        placeholder={ placeholder }
        type={ type }
        onChange={ onChange }
        className="relative w-full h-full pl-8 bg-transparent :placeholder:text-[#00000] placeholder:opacity-[35%] text-[15px] outline-none"
      />
    </div>
  )
}

InputText.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  margimTop: PropTypes.string,
  margimBottom: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  icon: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
}

InputText.defaultProps = {
  height: 'w-9',
  width: 'w-full',
  margimTop: '',
  margimBottom: '',
  onChange: () => {},
  placeholder: 'Nome',
}
