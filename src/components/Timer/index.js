import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import {Content, TimerContent, TimerItem} from './styles';

const renderTime = ({ remainingTime }) => {
  return <TimerContent>{remainingTime}</TimerContent>
};

function Timer({duration, size, onComplete}) {
  return (
    <Content>
      <TimerItem>
        <CountdownCircleTimer
            isPlaying
            onComplete={onComplete}
            duration={duration}
            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
            size={size}
            strokeWidth='5'
          >
            {renderTime}
          </CountdownCircleTimer>
      </TimerItem>
    </Content>
   
  );
}

export default Timer;
