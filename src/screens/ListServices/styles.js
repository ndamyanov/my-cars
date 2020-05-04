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
  margin-left: 2em;
  width: 80%;
`;

export const StyledCard = styled.div`
  border: 2px solid gray;
  border-radius: 0.5em;
  margin: 1em;
  display: grid;
  padding: 0.5em;
  grid-template-columns: 15% 15% 60% 10%;
`;

//grid-template-columns: 1fr 1fr 4fr 1fr;


// grid-template-areas:
//               "date km km km i"
//               "date desc desc desc i"
//               "date desc desc desc i";

export const Date = styled.div`
  font-size: 1.2em;
  color: blue;
  text-align: left;
  padding-left: 3em;
`;

export const Km = styled.div`
  font-size: 1.2em;
  text-align: right;
  padding-right: 6em;
  color: blue;
`;

export const Description = styled.div`
`;

export const Icons = styled.div`
  text-align: right;
  padding-right: 3em;
  color: blue;
`;
