import React, { useEffect, useState } from 'react';

import { useDifficulty } from '../../contexts/difficulty';
import { useScore } from '../../contexts/score';

import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Timer from '../../components/Timer';
import Loading from '../../components/Loading';

import { QuizContainer, FieldsetContainer, PersonsContainer, PersonsLegend, ImageContainer, PersonImage, Questions, ButtonContainer, Button } from './styles';

import apiMarvel from '../../services/apiMarvel';

interface Persons {
  id: number;
  name: string;
  thumbnail: {
    path: string;
  }
}

const min = 1;
const max = 1488;
let offSet = 0;
let mainPersonIndex = 0;
let mainPersonUrl = '';
let scoreUser = 0;
let points = 0;
let timerDifficulty = 0;

function randomOffSet() {
  offSet = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
  return offSet;
}

function randomMainPerson() {
  mainPersonIndex = Math.floor(Math.random() * (+3 + 0 - +0)) + +1;
  return mainPersonIndex;
}

const Quiz: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [persons, setPersons] = useState([]); // Lista de personagens 
  const [scoreGame, setScoreGame] = useState(0); // Pontuação do jogador
  const [questionNumber, setQuestionNumber] = useState(1); // Quantidade de questões
  const [jump, setJump] = useState(0); // Quantidade de pulos disponíveis
  const [mainPersonId, setMainPersonId] = useState(null);
  const [disabled, setDisabled] = useState(false); // Manipular click do botão pular
  
  
  const { difficultyGame } = useDifficulty(); // Dificuldade do jogo
  const { setScoreEndGame } = useScore();
  const { push } = useHistory();

  async function getPersons() {
    setLoading(true);
    const response = await apiMarvel.get(`${process.env.REACT_APP_MARVEL_URL}&offset=${offSet}&apikey=${process.env.REACT_APP_MARVEL_KEY}`);

    const { results } = response.data.data;

    const validPersons = results.filter((result: Persons) => {
      return ((!result.thumbnail.path.includes('image_not_available')) && (!result.thumbnail.path.includes('4c002e0305708')));
    });

    setPersons(validPersons.slice(0, 4));

    const { path, extension } = validPersons[mainPersonIndex].thumbnail;
    mainPersonUrl = `${path}.${extension}`

    setLoading(false);
  }

  function verifyDifficulty() {
    if (difficultyGame === 'Easy') {
      points = 1;
      timerDifficulty = 900;
    } else if (difficultyGame === 'Medium') {
      points = 3;
      timerDifficulty = 12;
    } else {
      points = 5;
      timerDifficulty = 7;
    }
  }

  function handleClick(idPerson: number) {
    const { id } = persons[mainPersonIndex];
    setMainPersonId(id);

    /** Verificando se acertou a resposta */

    setTimeout(() => {
      if (idPerson === id) {
        scoreUser += points;
        setScoreEndGame(scoreUser);
      }
      setQuestionNumber(questionNumber => questionNumber + 1);
      setScoreGame(scoreUser);
      randomOffSet();
      randomMainPerson();
      getPersons();
    }, 1500);
  }

  function handleJump() {
    if (jump === 3) {
      alert('Você não possui mais pulos disponíveis!');
      setDisabled(true);
      return;
    }
    setJump(jump => jump + 1);
    setQuestionNumber(questionNumber);
    randomOffSet();
    randomMainPerson();
    getPersons();
  }

  function timerOver() {
    setQuestionNumber(setQuestionNumber => setQuestionNumber + 1);
    randomOffSet();
    randomMainPerson();
    getPersons();
  }

  useEffect(() => {
    verifyDifficulty();
    randomOffSet();
    randomMainPerson();
    getPersons();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!difficultyGame) {
      window.alert('Você precisa selecionar uma dificuldade para jogar!');
      push('/');
      return;
    }
    if (questionNumber === 11) {
      push('/score');
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scoreGame, questionNumber, jump, difficultyGame]);

  return (
    <QuizContainer>
      <Header />
      <FieldsetContainer>
        <PersonsContainer>
          <PersonsLegend>Questão {questionNumber} de 10</PersonsLegend>
          {loading ? <Loading /> :
            <>
              <ImageContainer>
                <PersonImage src={mainPersonUrl} />
                <Timer duration={timerDifficulty} size={50} onComplete={timerOver} />
              </ImageContainer>
              <Questions>
                {persons.map((person: Persons) => {
                  return (
                    <Button key={person.id}
                      isCorrect={person.id === mainPersonId}
                      color='#1f4068'
                      onClick={() => handleClick(person.id)}
                      name={person.name}>{person.name}
                    </Button>
                  )
                })}
              </Questions>
            </>
          }
        </PersonsContainer>
        <ButtonContainer>
          <p>Pulos restantes: {3 - jump}</p>
          <Button name='Pular' disabled={disabled} color='#1b1b2f' onClick={handleJump}>Pular</Button>
        </ButtonContainer>
      </FieldsetContainer>
    </QuizContainer>
  );
}

export default Quiz;