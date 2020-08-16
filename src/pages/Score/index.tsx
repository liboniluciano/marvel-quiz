import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import { useScore } from '../../contexts/score';

import { Container, ScoreText, FormItems, Input, Form, Button, InfoScore, Label, PlayAgain } from './styles';

type FormData = {
  name: string;
  email: string;
};

const Score: React.FC = () => {
  const { scoreEndGame } = useScore();

  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(({ name, email }) => {
    console.log(name, email);
  });

  return (
    <Container>
      <Header />
      <ScoreText>Você realizou {scoreEndGame} pontos!</ScoreText>
      {scoreEndGame === 0 ?
        <PlayAgain>
          <Button type='submit'>Jogar novamente</Button>
        </PlayAgain>
        :
        <>
          <InfoScore>Deseja salvar sua pontuação?</InfoScore>
          <Form onSubmit={onSubmit}>
            <FormItems>
              <Label>Nome</Label>
              <Input name="name" ref={register} />
            </FormItems>
            <FormItems>
              <Label>Email</Label>
              <Input type='email' name="email" ref={register} />
            </FormItems>
            <FormItems>
              <Button type='submit' onSubmit={onSubmit}>Salvar Pontuação</Button>
            </FormItems>
          </Form>
        </>
      }
    </Container>
  );
}

export default Score;