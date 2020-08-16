import styled from 'styled-components';

export const Container = styled.div`
  width: 100wh;
  height: 100hw; 
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: auto;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 80%;
  margin-top: 2rem;

  @media(min-width: 70rem){
    width: 15rem;
    height: 15rem;
  }
`;

export const Name = styled.h1`
  font-size: 3rem;
  margin-top: 2rem;
`;

export const DescriptionProject = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 2rem;
`;

export const DescriptionItem = styled.p`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.7rem;

  @media(min-width: 70rem){
    font-size: 2.3rem;
  }
`;

export const A = styled.a`
 color: #ffd571;
 size: 2.5rem;
 text-decoration: none;
`;

export const ContactContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkSocials = styled.a`
  color: #ffd571;
  font-size: 3rem;
  text-decoration: none;
`;

export const ContactItem = styled.div`
  padding: 0 3rem;
  display: flex;
  align-items: center;

  @media(min-width: 70rem){
    padding: 0 10rem;
  }
`;

