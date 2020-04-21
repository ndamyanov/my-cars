import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';


export const Container = styled.div`
  // display: grid;
  // grid-template: 100% / auto auto auto;
  text-align: center;
  align-items: center;
`;

export const SearchField = styled.div`
  margin: 3em;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  display: inline-block;
  position: absolute;
  margin: 0.7em;
`;

export const InlineItem = styled.div`
  display: inline-block;
`;

export const SearchInput = styled.input`
  display: inline-block;  
  width: 80em;
  height: 3em;
  border: 2px solid gray;
  border-radius: 1em;
  text-decoration: none;
  outline: none;
  padding-left: 3em;
  font-size: 1.2em;
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