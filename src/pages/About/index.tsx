import React from 'react';

import Header from '../../components/Header';
import { IoLogoGithub,  IoLogoLinkedin} from 'react-icons/io';

import { Container, ImageContainer, Img, Name, DescriptionProject, DescriptionItem, A, ContactContainer, ContactItem, LinkSocials } from './styles';

const About: React.FC = () => {
  const target = '_blank';
  return (
    <Container>
      <Header />
      <ImageContainer>
        <Img src='https://avatars0.githubusercontent.com/u/26471185?v=4' />
        <Name>Luciano H. Silva Filho</Name>
      </ImageContainer>
      <DescriptionProject>
        <DescriptionItem>
          Este projeto foi desenvolvido em React para praticar alguns conhecimentos do framework na contrução de SPA (Single Page Application):
        </DescriptionItem>

        <DescriptionItem>
          -React State <br />
          -React Hooks <br />
          - Context API <br />
          - Styled Components
        </DescriptionItem>

        <DescriptionItem>
          Os personagens são buscados através da API da Marvel, disponível para fins didáticos.
          <A href='https://developer.marvel.com/' target={target}> Ela pode ser acessada aqui. </A>
        </DescriptionItem>
      </DescriptionProject>

      <ContactContainer>
        <ContactItem>
          <IoLogoLinkedin size={40} color='#005f91'/>
          <LinkSocials href='https://www.linkedin.com/in/luciano-henrique-silva-filho-635323150/' target={target}>LinkedIn</LinkSocials>
        </ContactItem>
        <ContactItem>
          <IoLogoGithub size={40} />
          <LinkSocials href='https://github.com/liboniluciano' target={target}>GitHub</LinkSocials>
        </ContactItem>
      </ContactContainer>
      
    </Container>
  );
}

export default About;