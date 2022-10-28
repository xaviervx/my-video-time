import React from 'react';

import ProptTypes from 'prop-types';

import * as S from './styles';

export function OurServices(props) {
  const {
    title,
    imageSrc,
  } = props;

  return (
    <S.Container>
      <S.ContentMain>
        {
          imageSrc && <S.ContentImg src={ imageSrc } />
        }

        <S.ContentHeading>
          <S.Heading>
            {title}
          </S.Heading>
        </S.ContentHeading>
      </S.ContentMain>
    </S.Container>
  );
}

OurServices.proptTypes = {
  title: ProptTypes.string.isRequired,
  imageSrc: ProptTypes.string.isRequired,
}
