import React from 'react'

import { FooterOptions } from '../FooterOptions'

function Footer() {
  return (
    <div className="bg-footer w-full md:h-[450px] md:flex items-center text-white gap-12 pl-10 pr-10 xl:pl-0 xl:pr-0 relative">
      <div className="md:w-[27%] flex flex-col items-center pt-8">
        <div>
          <img src="/logo-whiteversion.png" alt="Logo Whiteversion" />
        </div>

        <div className="text-center text-[19px] md:text-2xl mt-5 absolute md:static bottom-10">
          <p>
            ©  My Vídeo Time 2020
          </p>
          <p>All Rights Included</p>
        </div>
      </div>

      <div className="grow mt-4">
        <div className="max-w-3xl">
          <div className="relative">
            <span className="absolute right-3 h-[23px] md:h-[33px] w-[22px] md:w-[31px] top-0 bottom-0 my-auto">
              <img src="/icon-search-footer.png" alt="Icon Search Footer" />
            </span>

            <input type="text" className="w-full bg-footer border-2 md:border-1 border-white rounded-xl md:rounded-lg h-[44px] md:h-[61px] outline-none text-2xl pl-3 pr-14" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 text-[19px] md:text-2xl mt-12 text-center pb-44 md:pb-0">
            <FooterOptions options={ ['Cursos', 'Aulas Particulares', 'Idiomas', 'Consultas', 'Consultorias'] } title="Faça uma reunião" footerOptionClass="order-2 md:order-1" />

            <FooterOptions options={ ['Fale Conosco', 'FAQ - Perguntas Frequentes', 'Vire um Professor', 'Política de Privacidade', 'Blog'] } title="Informações Úteis" footerOptionClass="order-1 md:order-2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
