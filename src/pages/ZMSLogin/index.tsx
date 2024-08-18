import React from "react";
import { useForm, Controller } from "react-hook-form";
import { MainContainer, ContentsContainer, CouponInputContainer } from "./styles";
import icBurger from '../../assets/ic_burger.svg';
import ToggleButton from "../../components/atoms/Toggle";

const ZMSLogin = () => {
    // useForm 훅을 사용하여 폼 컨트롤을 초기화
    const { control } = useForm();

    return (
      <MainContainer>
        <ToggleButton></ToggleButton>
        <img
          src={icBurger}
          alt="Burger Icon"
          style={{
            maxWidth: '100%',
            height: 'auto',
            cursor: 'pointer',
            marginTop: '50px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <ContentsContainer>
          <CouponInputContainer>
            <Controller
              name="couponNumber"
              control={control}
              render={({ field: { onChange, value } }) => (
                <input
                  type="text"
                  id="couponNumber"
                  value={value}
                  style={{
                    padding: '0px !important',
                    border: '0px',
                    width: '100%',
                    marginRight: '16px',
                    outline: 'none !important',
                    borderBottom: '1px solid #dbdbdb',
                  }}
                  placeholder="10자리를 입력해 주세요."
                  name="couponNumber"
                  onChange={onChange}
                />
              )}
            />
          </CouponInputContainer>
        </ContentsContainer>
      </MainContainer>
    );
};

export default ZMSLogin;
