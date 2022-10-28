import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentMain = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContentImg = styled.img`
  display: ${ ({ imageSrc }) => (imageSrc === ''
    ? 'none'
    : 'flex') };
  height: 14rem;
  width: 14rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const ContentHeading = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Heading = styled.h3`
  font-size: 1.5rem;
`;
