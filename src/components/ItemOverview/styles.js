import styled from 'styled-components';

export const StyledCard = styled.div`
  margin: 1em;

  display: grid;
  grid-template-columns: repeat(2, auto) 5em;
  padding: 0.5em;

  border: 2px solid gray;
  border-radius: 1em;
  text-decoration: none;
  outline: none;
  margin-left: 3em;
`;

export const Title = styled.h5`
  color: blue;
`;
