import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

export const MenuContent = styled.div`
  height: 4.4rem;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #202020;
  margin-bottom: auto;

  @media(min-width: 700px){
  }

`;

export const HeaderImg = styled.img.attrs({
  src: logo
})`
width: 10rem;
`

export const ItemMenu = styled.p`
  margin-right: 1.5rem;
  max-width: 100vw;
  display: flex;
  align-items: center;
  height: 3.2rem;
  font: 700 3rem Marvel;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;

`;