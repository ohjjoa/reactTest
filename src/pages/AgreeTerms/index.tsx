import React from "react";
import { MainContainer } from "./styles";
import Title from '../../components/atoms/Title';

const AgreeTerms = () => {
    return (
    
       
       <>
         <Title
        title="약관 동의"
        leftArrowButtonVisible
        leftOnClick={() => {
          alert('')
        }}
        rightCloseButtonVisible={false}
        />
       
       
       </>
    );
};

export default AgreeTerms;
