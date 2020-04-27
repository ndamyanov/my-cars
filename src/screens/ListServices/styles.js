import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';


export const Container = styled.div`
  // display: grid;
  // grid-template: 100% / auto auto auto;
  text-align: center;
  align-items: center;
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
  position: absolute;
  bottom: 5em;
  right: 5em;
  border-radius: 50%;
`;

export const StyledCard = styled.div`
  border: 1px solid black;
  margin: 1em;
`;

export const ListContainer = styled.div`
  border: 1px solid black;
  margin: 1em;
  width: 80%;
  text-align: center;
  align-items: center;
`;
