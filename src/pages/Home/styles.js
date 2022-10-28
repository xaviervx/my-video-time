import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  justify-content: center;
`;

export const ContentServices = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
`;

export const ContentHighlights = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem 4rem;
`;

export const ContentHeader = styled.header`
  width: 100vw;
  height: 400px;

  background: var(--purple);

  align-items: center;
  justify-content: center;
`;

export const Heading = styled.h2`
  color: black;
`;
