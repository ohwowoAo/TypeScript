import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface loginInput {
  id : string,
  pw : string
}

const App = () => {
  const [userInput, setUserInput] = useState<loginInput>({id: '', pw:''})
  const cursorId = useRef<HTMLInputElement>(null);
  const cursorPw = useRef<HTMLInputElement>(null);

  const changeInput = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setUserInput({...userInput, [name]: value} )
  }
  // const inputpw = (e : {target : HTMLInputElement}) => {
  //   setUserPw(e.target.value )
  // }
  const doLogin = () => {
    if(userInput.id === ''){
      alert('아이디를 입력해주세요');
      if (cursorId.current) {
        cursorId.current.focus()
      }
    }else if(userInput.pw === ''){
      alert('비밀번호를 입력해주세요');
      if (cursorPw.current) {
        cursorPw.current.focus()
      }
    }else{
      alert('로그인');
    }
  }
  console.log(userInput)
  
  useEffect(()=>{
    if (cursorId.current) {
      cursorId.current.focus()
    }
  },[])

  return (
    <Wrap>
      <WrapInner>
        <Logo><img src= {process.env.PUBLIC_URL + '/images/logo.png'} alt='' style={{width: 200}}/></Logo>
        <Form>
          <Id>
            <p>아이디</p>
            <input ref={cursorId} name="id" placeholder="아이디 입력하세요" onChange={changeInput}></input>
          </Id>
          <PW>
            <p>비밀번호</p>
            <input ref={cursorPw} name="pw" placeholder="비밀번호를 입력하세요" onChange={changeInput}></input>
          </PW>
          
          <LoginBtn onClick={doLogin}>
            로그인
          </LoginBtn>
        </Form>
      </WrapInner>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e6e9ed;
`;
const WrapInner = styled.div`
  position: relative;
  width: 300px;
  height: 500px;
  margin: 0 auto;
  padding: 0 30px;
  background: #fafafa;
  box-shadow: 0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
  border-radius: 25px;
`;
const Logo = styled.div`
  padding: 80px 0 40px;
  text-align: center;
`;
const Form = styled.div`
  text-align: center;
`;
const Id = styled.div`
  text-align: left;
  > p {
    font-size: 0.8rem;
    margin: 20px 0 6px;
  }
  > input{
    width: calc(100% - 26px);
    height: 38px;
    padding: 0 13px;
    border-radius: 30px;
    border: 1px solid #a9a9a9;
    font-size: 0.7rem;
  }
`;
const PW = styled.div`
  text-align: left;
  margin: 30px 0 0;
  > p {
    font-size: 0.8rem;
    margin: 0 0 6px;
  }
  > input{
    width: calc(100% - 26px);
    height: 38px;
    padding: 0 13px;
    border-radius: 30px;
    border: 1px solid #a9a9a9;
    font-size: 0.7rem;
  }
`;
const LoginBtn = styled.button`
  position: absolute;
  left: 30px;
  bottom: 20px;
  width: calc(100% - 60px);
  height: 38px;
  background-color: #0081c7;
  border-radius: 30px;
  border: 0;
  color: #fff;
`;
export default App;