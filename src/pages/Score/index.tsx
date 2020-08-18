import React from 'react';

import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { useScore } from '../../contexts/score';

import Header from '../../components/Header';

import apiRanking from '../../services/apiRanking';
import { Container, ScoreText, FormItems, Input, Form, Button, InfoScore, Label, PlayAgain } from './styles';

type FormData = {
  name: string;
  email: string;
};

const Score: React.FC = () => {
  const { scoreEndGame } = useScore();
  const { push } = useHistory();

  const { register, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = handleSubmit(async ({ name, email }) => {
    const response = await apiRanking.post('score', {
      name,
      email,
      score: scoreEndGame
    });

    console.log(response);
    if(response.status === 201){
      toast.success('Sua pontuação foi salva com sucesso!');
      push('/');
    } else {
      toast.error(response.data.message);
    }
  });

  function handlePlayAgain(){
    push('/');
  }

  return (
    <Container>
      <Header />
      <ScoreText>Você realizou {scoreEndGame} pontos!</ScoreText>
      {scoreEndGame === 0 ?
        <PlayAgain>
          <Button type='submit' onClick={handlePlayAgain}>Jogar novamente</Button>
        </PlayAgain>
        :
        <>
          <InfoScore>Deseja salvar sua pontuação?</InfoScore>
          <Form onSubmit={onSubmit}>
            <FormItems>
              <Label>Nome</Label>
              <Input 
                name="name" 
                ref={register({ required: true, maxLength: 25 })}
              />
              {errors.name?.type === "required" &&
              "Campo é obrigatório."}
              {errors.name?.type === "maxLength" &&
              "O limite máximo de caracteres é 25."}
            </FormItems>

            <FormItems>
              <Label>Email</Label>
              <Input
                type='email'
                name="email"
                ref={register({
                  required: "Campo obrigatório",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "E-mail inválido"
                  }
                })} 
              />
                {errors.email && errors.email.message}
            </FormItems>
            
            <FormItems>
              <Button 
                type='submit' onSubmit={onSubmit}>Salvar Pontuação</Button>
            </FormItems>
          </Form>
        </>
      }
    </Container>
  );
}

export default Score;