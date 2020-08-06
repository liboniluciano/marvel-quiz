import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';


export const MenuContent = styled.div`
  height: 6.4rem;
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: auto;

  @media(min-width: 700px){
    
  }

`;

export const HeaderImg = styled.img.attrs({
  src: logo
})`
width: 100px;
height: 100px;
`

export const ItemMenu = styled.a`
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  height: 3.2rem;
  font: 700 3.0rem Popin;

`;