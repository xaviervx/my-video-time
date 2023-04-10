import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { EnvelopeSimple, X } from 'phosphor-react';

import { InputPassword } from '../../components/InputPassword';
import { InputText } from '../../components/InputText';
import { useUser } from '../../hook/contexts/useUser';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const { singIn } = useUser()

  function handleSetEmail(event) {
    setEmail(event.target.value)
  }

  function handleSetPassword(event) {
    setPassword(event.target.value)
  }

  const myForm = {
    email,
    password,
  }

  console.log(myForm)

  function login() {
    singIn({ userName: email })

    navigate('/')
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#383939]">
      <form className="p-4 w-[28rem] h-96 flex flex-col items-center justify-evenly bg-white rounded-lg">
        <X
          size={ 21 }
          className="relative top-0 left-44 opacity-[35%] cursor-pointer"
        />
        <p className="relative bottom-7 mb-1 h-16 text-center font-medium text-[41px] text-[#5599fe]">
          Login
        </p>
        <InputText
          height="h-8"
          width="w-80"
          margimBottom="mb-3"
          placeholder="Email"
          icon={ <EnvelopeSimple size={ 21 } className="opacity-[35%]" /> }
          onChange={ handleSetEmail }
        />
        <InputPassword
          name="Password"
          width="w-80"
          height="h-8"
          margimBottom="mb-5"
          placeholder="Senha"
          onChange={ handleSetPassword }
        />
        <button
          className="w-80 h-9 mb-6 bg-[#5599fe] rounded-full text-center text-[20px] text-white"
          type="button"
          onClick={ () => login() }
        >
          Entrar
        </button>
        <p className="text-center mb-3 text-[13px] text-[#5599fe] opacity-[90%]">
          Esqueceu sua senha? Clique aqui!
        </p>
        <p className="w-[28rem] text-center pt-4 border-t border-[#707070] text-[16px] text-[#003480]">
          Não tem conta? Cadastre-se
        </p>
      </form>
    </div>
  );
}
