import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styles';

export function Highlights(props) {
  const {
    title,
    subtitle,
    imgSrc,
  } = props;

  return (
    <S.Container>
      <S.ContentMain>
        {
          imgSrc && <S.ContentImg src={ imgSrc } />
        }

        <S.ContentHeading>
          <S.Heading>
            {title}
          </S.Heading>
          <S.Text>
            {subtitle}
          </S.Text>
        </S.ContentHeading>
      </S.ContentMain>
    </S.Container>
  );
}

Highlights.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
}
