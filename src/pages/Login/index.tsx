import React from "react";
import { MainContainer, ButtonContainer } from "./styles";
import icBurger from '../../assets/ic_burger.svg';
import { TitleContainer } from "../../components/atoms/Title/styles";

const AgreeTerms = () => {
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
    <ButtonContainer>
        Button content here
    </ButtonContainer>
    <ButtonContainer>
        Button content here
    </ButtonContainer>
    <div style={{ position: 'absolute', bottom: '0', width: '100%', textAlign: 'center' }}>
        test
    </div>
    </MainContainer>
    );
};

export default AgreeTerms;
