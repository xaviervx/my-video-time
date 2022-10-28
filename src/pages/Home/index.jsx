import React from 'react';

import { Highlights } from '../../components/Highlights';
import { OurServices } from '../../components/OurServices';

import * as S from './styles';

function Home() {
  return (
    <S.Container>
      <S.ContentHeader>
        <S.Heading>
          My Video Time
        </S.Heading>
      </S.ContentHeader>
      <S.Heading>
        Nossos Serviços
      </S.Heading>

      <S.ContentServices>
        <OurServices title="Cursos" imageSrc="cursos.png" />
        <OurServices title="Professores" imageSrc="teachers.png " />
        <OurServices title="Idiomas" imageSrc="idiomas.png" />
        <OurServices title="Consultorias" imageSrc="consultorias.png" />
        <OurServices title="Consultas" imageSrc="consultas.png" />
      </S.ContentServices>

      <S.Heading>
        Em destaque
      </S.Heading>
      <S.ContentHighlights>
        <Highlights subtitle="teste" title="Cursos" imgSrc="eua.png" />
        <Highlights subtitle="teste" title="Cursos" imgSrc="eua.png" />
        <Highlights subtitle="teste" title="Cursos" imgSrc="eua.png" />
        <Highlights subtitle="teste" title="Cursos" imgSrc="eua.png" />
      </S.ContentHighlights>
    </S.Container>
  )
}

export default Home
