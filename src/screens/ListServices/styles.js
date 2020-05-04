import styled from 'styled-components';

export const Container = styled.div`
  // display: grid;
  // grid-template: 100% / auto auto auto;
`;

export const InlineItem = styled.div`
  display: inline-block;
`;

export const AddButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 50%;
  position: -webkit-sticky;
  position: sticky;
  top: 80%;
  float: right;
  right: 4%;
`;

export const ListContainer = styled.div`
  margin-left: 9em;
  width: 80%;
`;

export const StyledCard = styled.div`
  border: 2px solid gray;
  border-radius: 0.5em;
  margin: 1em;
  display: grid;
  grid-template-areas:
              "a a b b i"
              "c c c c c"
              "c c c c c";
  padding: 0.5em;
`;

export const Date = styled.h5`
  grid-area: a;
  color: blue;
  text-align: left;
  padding-left: 6em;
`;

export const Km = styled.h6`
  grid-area: b;
  text-align: right;
  padding-right: 6em;

`;

export const Description = styled.div`
  grid-area: c;
`;

export const UpdateIcon = styled.div`
  grid-area: i;
  text-align: right;
  padding-right: 3em;
  color: blue;
`;