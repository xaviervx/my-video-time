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

export const ContentHeading = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ContentImg = styled.img`
  display: ${ ({ imgSrc }) => (imgSrc === ''
    ? 'none'
    : 'flex') };
  height: 220px;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const Heading = styled.h3`
  font-size: 1.5rem;
`;

export const Text = styled.p`
  font-size: 1rem;
`;
