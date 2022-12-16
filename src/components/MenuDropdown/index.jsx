import React, { useState } from 'react';

import { List } from 'phosphor-react';
import PropTypes from 'prop-types';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MenuDropdown(props) {
  const { menuIcon, buttonMenuIconClassName, menuItens } = props;

  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        className={ `flex rounded-full p-2 max-w-max cursor-pointer shadow-2xl items-center ${ buttonMenuIconClassName }` }
        onClick={ () => setOpen((prevState) => !prevState) }
        type="button"
      >
        {menuIcon}
        {/* <FontAwesomeIcon icon={ menuIcon.icon } className={ `w-7 h-7 ${ menuIcon.classes }` } /> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg> */}
      </button>
      <div className={ `mt-1 bg-white rounded-sm shadow-md min-w-[10rem] ${ open
        ? 'absolute'
        : 'hidden' } ` }
      >
        <ul className="flex flex-col gap-1 p-1 z-40">
          <li className="text-sm px-1 gap-2 py-1 rounded cursor-pointer hover:bg-gray-200">
            <button className="w-full flex justify-between items-center " type="button" onClick={ () => setOpen(false) }>
              Meu perfil
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </li>
          {menuItens.map(({ label, icon, onClickAction }, index) => (
            <li className="text-sm px-1 gap-2 py-1 rounded cursor-pointer hover:bg-gray-200" key={ index }>
              <button
                className="w-full flex justify-between items-center "
                type="button"
                onClick={ () => {
                  setOpen(false)
                  onClickAction()
                } }
              >
                {label}
                {icon}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

MenuDropdown.propTypes = {
  menuIcon: PropTypes.element,
  buttonMenuIconClassName: PropTypes.string,
  menuItens: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.element,
      onClickAction: PropTypes.func
    })
  ).isRequired,
  // menuItens
}

MenuDropdown.defaultProps = {
  buttonMenuIconClassName: '',
  menuIcon: <List size={ 28 } className="h-7 w-7" />
}

export default MenuDropdown;
