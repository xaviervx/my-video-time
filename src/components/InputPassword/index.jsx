import React, { useState } from 'react';

import { Lock, LockOpen } from 'phosphor-react';
import PropTypes from 'prop-types';

export const InputPassword = React.forwardRef(({
  width,
  height,
  margimBottom,
  margimTop,
  placeholder,
  onChange,
  id,
  name,
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const type = showPassword
    ? 'text'
    : 'password'

  function handleShowPassword() {
    setShowPassword((prevState) => !prevState);
  }

  return (
    <div
      ref={ ref }
      className={ `relative ${ width } ${ height } ${ margimTop } ${ margimBottom } border-b border-[#707070]` }
    >
      <button
        type="button"
        onClick={ () => handleShowPassword() }
        className="absolute h-auto w-auto mt-1 z-10 cursor-pointer"
      >
        {showPassword
          ? <LockOpen size={ 21 } className="opacity-[35%]" />
          : <Lock size={ 21 } className="opacity-[35%]" />}
      </button>
      <input
        name={ name }
        id={ id }
        placeholder={ placeholder }
        type={ type }
        onChange={ onChange }
        className="relative w-full h-full pl-8 bg-transparent :placeholder:text-[#00000] placeholder:opacity-[35%] text-[15px] outline-none"
      />
    </div>
  );
});

InputPassword.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  margimTop: PropTypes.string,
  margimBottom: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
};

InputPassword.defaultProps = {
  height: 'w-9',
  width: 'w-full',
  margimTop: '',
  margimBottom: '',
  onChange: () => {},
  placeholder: 'Nome',
  id: undefined,
};
