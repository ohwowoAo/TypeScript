import React, { useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [startTxt, setStartTxt ] = useState('GAME START~!');

  const starttxt = ['가위' , '바위', '보'];
  let i = 0;
  const second = () => {
    let setStart = setInterval(function() {
      setStartTxt(starttxt[i])
      i ++;
      if( i === 3 ){
        clearInterval(setStart);
        
      }
    }, 1000);
  }
  
  return (
    <Wrap>
      <Start onClick={second}>{startTxt}</Start>
      {/* <h2 ref={text}></h2> */}
      <Hand>가위</Hand>
      <Hand>바위</Hand>
      <Hand>보</Hand>
      {/* <p>게임 방법: 가위바위보 글자가 사라지면 위 버튼 중 내고 싶은 버튼을 누르세요.</p> */}
    </Wrap>
  );
};

const Wrap = styled.div`
  padding: 80px 0;
  text-align: center;
`;

const Start = styled.button`
  display: block;
  margin: 0 auto 80px;
  padding: 20px;
  font-size: 30px;
`;

const Hand = styled.button`
  margin: 0 10px;
`;

export default App;