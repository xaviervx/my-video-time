import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { List, SignOut } from 'phosphor-react';

import PropTypes from 'prop-types';

import { useUser } from '../../hook/contexts/useUser';
import MenuDropdown from '../MenuDropdown';

function Header(props) {
  const { showBanner } = props
  const [search, setSearch] = useState('')

  const { name, logout } = useUser()

  const navigate = useNavigate()

  return (
    <header className={ `flex w-full ${ showBanner
      ? 'h-[550px]'
      : 'h-[150px]' } p-14 pb-0 bg-violet-400 overflow-hidden relative` }
    >
      <div className="grid grid-cols-[1fr_4fr_1fr] grid-flow-row z-10 gap-6 grow h-max items-center">
        <div className="flex gap-4 h-[55px] col-span-1 select-none">
          <img src="/logo-part1.png" alt="Play Button" />
          <img src="/logo-part2.png" alt="My Video Time" />
        </div>
        <div className="relative h-max">
          <div className="absolute right-1 top-[50%] translate-y-[-50%]  p-2 bg-blue-500 rounded-full hover:bg-blue-600 hover:cursor-pointer transition-all duration-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-7 h-7 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>

          <input
            className="flex-1 pl-6 pr-16 py-[0.80rem] rounded-full bg-white text-base text-gray-500 outline-none shadow-lg w-full h-[50px]"
            type="text"
            placeholder="Digite o que você precisa"
            onChange={ (event) => setSearch(event.target.value) }
            value={ search }
          />
        </div>
        <div className="flex gap-4">
          <p className="text-white opacity-90 flex justify-center items-center leading-tight max-w-[150px]">
            {
              !name
                ? (
                  <>
                    Torne-se um
                    <br />
                    professor
                  </>
                )
                : name
            }

          </p>
          <div className="flex justify-between items-center px-1 gap-1 min-w-max h-[50px] bg-white rounded-full">
            {/* <div className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div> */}

            {/* <MenuDropdown menuIcon={ { icon: 'fa-solid fa-hand-back-fist', classes: 'text-blue-700' } } /> */}
            <MenuDropdown menuItens={ [
              {
                label: 'Meu perfil',
                icon: <List size={ 24 } className="h-6 w-6" />,
                onClickAction: () => {}
              },
              {
                label: 'Sair',
                icon: <SignOut size={ 24 } className="h-6 w-6" />,
                onClickAction: () => {
                  logout()
                  navigate('/login')
                }
              },
            ] }
            />

            <img
              className="rounded-full w-11 h-11 object-cover"
              src="/consultas.png"
              alt="avatar"
            />
          </div>
        </div>
      </div>
      {
        showBanner && (
          <div className="absolute flex w-full px-64 pt-3 items-center">
            <img className="h-auto w-[300px] top-16 left-80 z-0 select-none" src="/img-woman-header.png" alt="Woman with her cellphone" />
            <div className="flex w-[48rem] ml-40 flex-col gap-y-5">
              <h1 className="text-6xl text-[#2b2b2b] font-bold">
                Conhecimento.
                <br />
                Seja onde você estiver.
              </h1>
              <p className="text-justify text-2xl font-medium text-[#2b2b2b] leading-relaxed">
                Com a My Vídeo Time, ter acesso aos melhores profissionais da sua
                área nunca foi tão fácil. Agende reuniões de forma rápida, fácil e de onde você estiver.
              </p>
              <div>
                <button className="border-2 border-[#343434] p-2 text-2xl rounded-md" type="button">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        )
      }

    </header>
  )
}

Header.propTypes = {
  showBanner: PropTypes.bool
}

Header.defaultProps = {
  showBanner: true
}

export default Header
