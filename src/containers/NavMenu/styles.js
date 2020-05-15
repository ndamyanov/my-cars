import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
  background-color: #282c34;
`;

export const MenuItem = styled.div`
  margin: 2em;
  flex: 2;
    a {
      color: #FFF;
      text-decoration: none;
      font-size: 1.3em;
    }
    a:hover {
      color: gray;
    }
`;

// export const MenuItemSearch = styled.div`
//   flex: 6;
//   margin: 2em;
// `;

export const MenuAction = styled.div`
  margin: 2em;
  flex: 1;
    a {
      color: #FFF;
      text-decoration: none;
      font-size: 1.3em;
    }
    a:hover {
      color: gray;
    }
`;
