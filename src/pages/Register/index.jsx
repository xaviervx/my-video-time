import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';

import {
  X, EnvelopeSimple, User, Phone, GenderIntersex, Buildings, Camera, MapPinLine, MapTrifold
} from 'phosphor-react';

import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../components/Button';
import { ErrorText } from '../../components/ErrorText';
import { InputPassword } from '../../components/InputPassword';
import { InputText } from '../../components/InputText';
import { registerFormSchema } from '../../utils/formsSchemas';

export default function Register() {

  const [userImage, setUserImage] = useState();

  const { handleSubmit, formState: { errors }, control } = useForm({
    resolver: yupResolver(registerFormSchema)
  });

  const onSubmit = (data) => console.log(data);

  function encodeImageFileAsURL(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserImage(reader.result)
    }
    reader.readAsDataURL(file);
  }

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="rounded-2xl px-14 pt-16 pb-8 shadow-2xl relative">
        <X
          size={ 24 }
          className="absolute top-6 right-6 opacity-[35%] cursor-pointer"
        />
        <p className="text-[#5599fe] text-5xl text-center mb-20">Criar conta</p>
        <form>
          <div className="w-full justify-between gap-10 flex flex-row">
            <div>
              <Controller
                name="name"
                control={ control }
                rules={ { required: true } }
                render={ ({ field }) => (
                  <InputText
                    height="h-8"
                    width="w-80"
                    placeholder="Nome completo"
                    margimBottom="mb-3"
                    valu
                    icon={ <User size={ 21 } className="opacity-[35%]" /> }
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    { ...field }
                  />
                ) }
              />
              <ErrorText text={ errors.name?.message } color="text-red-600" />
              <Controller
                name="email"
                control={ control }
                rules={ { required: true } }
                render={ ({ field }) => (
                  <InputText
                    height="h-8"
                    width="w-80"
                    placeholder="Email"
                    margimBottom="mb-3"
                    icon={ <EnvelopeSimple size={ 21 } className="opacity-[35%]" /> }
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    { ...field }
                  />
                ) }
              />
              <ErrorText text={ errors.email?.message } color="text-red-600" />
              <Controller
                name="phone"
                control={ control }
                rules={ { required: true } }
                render={ ({ field }) => (
                  <InputText
                    height="h-8"
                    width="w-80"
                    placeholder="Telefone"
                    margimBottom="mb-3"
                    icon={ <Phone size={ 21 } style={ { rotate: '90deg' } } className="opacity-[35%]" /> }
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    { ...field }
                  />
                ) }
              />
              <ErrorText text={ errors.phone?.message } color="text-red-600" />
              <Controller
                name="gender"
                control={ control }
                rules={ { required: true } }
                render={ ({ field }) => (
                  <InputText
                    height="h-8"
                    width="w-80"
                    placeholder="Gênero"
                    margimBottom="mb-3"
                    icon={ <GenderIntersex size={ 21 } className="opacity-[35%]" /> }
                // eslint-disable-next-line react/jsx-props-no-spreading
                    { ...field }
                  />
                ) }
              />
              <ErrorText text={ errors.gender?.message } color="text-red-600" />
              <Controller
                name="city"
                control={ control }
                rules={ { required: true } }
                render={ ({ field }) => (
                  <InputText
                    height="h-8"
                    width="w-80"
                    placeholder="Cidade"
                    margimBottom="mb-3"
                    icon={ <Buildings size={ 21 } className="opacity-[35%]" /> }
                // eslint-disable-next-line react/jsx-props-no-spreading
                    { ...field }
                  />
                ) }
              />
              <ErrorText text={ errors.city?.message } color="text-red-600" />

              <Controller
                name="password"
                control={ control }
                rules={ { required: true } }
                render={ ({ field }) => (
                  <InputPassword
                    height="h-8"
                    width="w-80"
                    placeholder="Senha"
                    margimBottom="mb-3"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                    { ...field }
                  />
                ) }
              />
              <ErrorText text={ errors.password?.message } color="text-red-600" />
            </div>
            <div>
              <div className="flex items-center justify-center">
                <div type="file" className="relative rounded-full border-2 border-[#0004] flex items-center justify-center h-[120px] w-[120px] mb-3 cursor-pointer overflow-hidden">
                  <input type="file" onChange={ (e) => encodeImageFileAsURL(e) } className="w-full h-full z-10 opacity-[0%] cursor-pointer" />
                  {!userImage
                    ? (
                      <Camera size={ 50 } className="absolute z-0 cursor-pointer opacity-[25%]" />
                    )
                    : (
                      <img src={ userImage } className="absolute z-0 cursor-pointer min-h-full min-w-full object-cover" alt="User_Image" />
                    )}
                </div>
              </div>
              <Controller
                name="cep"
                control={ control }
                rules={ { required: true } }
                render={ ({ field }) => (
                  <InputText
                    height="h-8"
                    width="w-80"
                    placeholder="CEP (Opicional)"
                    margimBottom="mb-3"
                    icon={ <MapPinLine size={ 21 } className="opacity-[35%]" /> }
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    { ...field }
                  />
                ) }
              />
              <ErrorText text={ errors.cep?.message } color="text-red-600" />

              <Controller
                name="state"
                control={ control }
                rules={ { required: true } }
                render={ ({ field }) => (
                  <InputText
                    height="h-8"
                    width="w-80"
                    placeholder="Estado"
                    margimBottom="mb-3"
                    icon={ <MapTrifold size={ 21 } className="opacity-[35%]" /> }
                // eslint-disable-next-line react/jsx-props-no-spreading
                    { ...field }
                  />
                ) }
              />
              <ErrorText text={ errors.state?.message } color="text-red-600" />

              <Controller
                name="retypedPassword"
                control={ control }
                rules={ { required: true } }
                render={ ({ field }) => (
                  <InputPassword
                    height="h-8"
                    width="w-80"
                    placeholder="Confirmar Senha"
                    margimBottom="mb-3"
                // eslint-disable-next-line react/jsx-props-no-spreading
                    { ...field }
                  />
                ) }
              />
              <ErrorText text={ errors.retypedPassword?.message } color="text-red-600" />

            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="my-8 w-[88%]">
              <Button onClick={ handleSubmit(onSubmit) }>Cadastrar</Button>
            </div>
            <Link to="/login" className="text-[#003480] text-xl font-medium">Já possui conta? Faça Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
