import React from 'react';
import { BoxLoading } from 'react-loadingg';

import { Container } from './styles';

function Loading() {
  return (
    <Container>
      <BoxLoading size='large' />
    </Container>
  );
}

export default Loading;