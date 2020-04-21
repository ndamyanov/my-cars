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

export const MenuItemSearch = styled.div`
  flex: 6;
  margin: 2em;
`;


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

export const SearchInput = styled.input`
    width: 100%;
    height: 2em;
`;

export const ShippingCartItems = styled.a`
  width: 72px;
  height: 72px;
  -moz-border-radius: 36px;
  -webkit-border-radius: 36px;
  border-radius: 36px;
  font-size: 18px;
  text-align: center;
  color: #616161;
  text-decoration: none;
  position: absolute;
  right: 24px;
  top: 36px;
  display: block;
  background: #535558 url(http://images.vfl.ru/ii/1484930184/14435803/15757225.png
  ) center no-repeat;
  background-size: 36px;
  box-shadow: 0 3px 6px rgba(97, 97, 97 0.16), 0 3px 6px rgba(97, 97, 97 0.23);
  -moz-box-shadow: 0 3px 6px rgba(97, 97, 97 0.16), 0 3px 6px rgba(97, 97, 97 0.23);
  -webkit-box-shadow: 0 3px 6px rgba(97, 97, 97 0.16), 0 3px 6px rgba(97, 97, 97 0.23);
    span {
      width: 24px;
      height: 24px;
      font-size: 16px;
      color: #fff;
      line-height: 24px;
      position: absolute;
      -moz-border-radius: 12px;
      -webkit-border-radius: 12px;
      border-radius: 12px;
      display: block;
      transform: scale(0);
      -o-transform: scale(0);
      -ms-transform: scale(0);
      -moz-transform: scale(0);
      -webkit-transform: scale(0);
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      background: #ffab00;
      box-shadow: 0 3px 6px rgba(255, 171, 0, 0.16), 0 3px 6px rgba(255, 171, 0, 0.23);
      -moz-box-shadow: 0 3px 6px rgba(255, 171, 0, 0.16), 0 3px 6px rgba(255, 171, 0, 0.23);
      -webkit-box-shadow: 0 3px 6px rgba(255, 171, 0, 0.16), 0 3px 6px rgba(255, 171, 0, 0.23);
 }
    span.counter {
      left: 48px;
      bottom: 48px;
      -webkit-transition: .2s linear;
      -moz-transition: .2s linear;
      -ms-transition: .2s linear;
      -o-transition: .2s linear;
      transition: .2s linear;
      transform: scale(1);
      -o-transform: scale(1);
      -ms-transform: scale(1);
      -moz-transform: scale(1);
      -webkit-transform: scale(1);
    }

    span.counterbig {
      left: 48px;
      bottom: 48px;
      -webkit-transition: .2s linear;
      -moz-transition: .2s linear;
      -ms-transition: .2s linear;
      -o-transition: .2s linear;
      transition: .2s linear;
      transform: scale(2);
      -o-transform: scale(2);
      -ms-transform: scale(2);
      -moz-transform: scale(2);
      -webkit-transform: scale(2);
    }
`;