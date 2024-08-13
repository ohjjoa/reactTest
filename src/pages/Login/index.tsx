import React from "react";
import { MainContainer, ContentsContainer } from "./styles";
import icBurger from '../../assets/ic_burger.svg';

const Login = () => {
    return (
      <MainContainer>
      <img
        src={icBurger}
        alt="Burger Icon"
        style={{
          maxWidth: '100%',
          height: 'auto',
          cursor: 'pointer',
          marginTop: '50px',
          display: 'block',       // This makes the image a block-level element
          marginLeft: 'auto',     // Auto margin on the left
          marginRight: 'auto',    // Auto margin on the right
        }}
      />
    <ContentsContainer style={{ marginTop: 50, textAlign: 'center' }}>
      <div>
        <span style={{ fontWeight: 'bold' }}>내 집 주차장</span>을
      </div>
      <div>
        빌려드립니다
      </div>
    </ContentsContainer>
    <ContentsContainer style={{ marginTop: 24}}>
      가장 빠른 회원가입
    </ContentsContainer>
    <ContentsContainer>
      카카오로 시작하기
    </ContentsContainer>
    <ContentsContainer>
      네이버로 시작하기
    </ContentsContainer>
    <ContentsContainer>
      애플로 시작히기
    </ContentsContainer>
    <div style={{ position: 'absolute', bottom: '20px', width: '100%', textAlign: 'center' }}>
        test
    </div>
    </MainContainer>
    );
};

export default Login;
