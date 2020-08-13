import React, { useEffect, useState } from 'react';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Timer from '../../components/Timer';
import apiMarvel from '../../services/apiMarvel';

import { QuizContainer, FieldsetContainer, PersonsContainer, PersonsLegend, ImageContainer, PersonImage, Questions, ButtonContainer, ButtonTest } from './styles';

interface Persons {
  id: number,
  name: string,
  thumbnail: {
    path:string
  }
}

const time = 10;
const min = 1;
const max = 1488;
let offSet = 0;
let mainPersonIndex = 0;
let mainPersonUrl = '';


function randomOffSet() {
  offSet = Math.floor(Math.random() * (+max + 1 - +min)) + +min; 
  return  offSet;
}

function randomMainPerson() {
  mainPersonIndex = Math.floor(Math.random() * (+3 + 0 - +0)) + +1; 
  return  mainPersonIndex;
}

const Quiz: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [persons, setPersons] = useState([]);

  async function getPersons() {
    setLoading(true);
    const response = await  apiMarvel.get(`${process.env.REACT_APP_MARVEL_URL}&offset=${offSet}&apikey=${process.env.REACT_APP_MARVEL_KEY}`);
      console.log(mainPersonIndex);

      const {results} = response.data.data;

      const validPersons = results.filter((result: Persons) => {
        return ((!result.thumbnail.path.includes('image_not_available')) && (!result.thumbnail.path.includes('4c002e0305708')));
      });

      setPersons(validPersons.slice(0,4));

      const {path, extension} = validPersons[mainPersonIndex].thumbnail;
      mainPersonUrl = `${path}.${extension}`
      setLoading(false);
  }

  function handleClick(idPerson: number){

    const { id } = persons[mainPersonIndex];

    randomOffSet();
    randomMainPerson();
    getPersons();

    console.log(id);

  }

  useEffect(() => {
    randomOffSet();
    randomMainPerson();
    getPersons();
   }, []);

  return (
     <QuizContainer>
      <Header /> 
      { !loading &&
        <FieldsetContainer>
          <PersonsContainer>
            <PersonsLegend>Questão 1 de 10</PersonsLegend>
            <ImageContainer>
              <PersonImage src={mainPersonUrl}/>
              <Timer duration={time} size={50}/>
            </ImageContainer>
            <Questions>
                {persons.map((person: Persons) => {
                  // return <Button key={person.id} name={person.name} label={person.name} color='#1f4068' />
                  return (
                  <ButtonTest key={person.id} onClick={() => handleClick(person.id)} name={person.name}>{person.name}</ButtonTest>
                  )
                })}
            </Questions>
          </PersonsContainer>
          <ButtonContainer>
            <Button name='Pular' label='Pular' color='#00b7c2' />
          </ButtonContainer> 
        </FieldsetContainer>
     }
     </QuizContainer>
  );
}

export default Quiz;