import React from 'react';

 import { Button } from './styles';

interface ButtonProps  {
  name: string,
  label: string,
  color: string
}


const ButtonHome: React.FC<ButtonProps> = ({name, label, color }) => {
  return (
    <Button id={name} color={color}>{label}</Button>
  );
}

export default ButtonHome;