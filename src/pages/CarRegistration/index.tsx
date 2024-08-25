import Title from "../../components/atoms/Title/PageTitle";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  CarNumberErrorContainer,
  CarNumberInput,
  CarNumberInputContainer,
  CarNumberText,
  CheckBoxLabel, CheckBoxTermsButtonContainer,

  TermsRequestText,
  TitleContainer
} from "./styles";
// import icArrowRightGreySmall from "../../assets/ic/ic_arrow_right_gray_small.svg";
import {MainContainer} from "../../components/styles";
// import {RequiredText, StyledCheckbox} from "../AgreeTerms/styles";
// import {ShareRequestGeojuEssentialText, ShareRequestGeojuRequestText} from "../ShareRequestGeoju/styles";
import CarNumberCheckBottomModal from "../../components/atoms/CarNumberCheckBottomModal";

// Define the form values type
interface IFormInputs {
  carNumber: string;
}

const CarRegistration = () => {
  const navigate = useNavigate();

  const [isCarNumberCheckBottomModalVisible, setIsCarNumberCheckBottomModalVisible] = React.useState(false);

  const handleLeftOnClick = () => {
    navigate(-1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: keyof typeof checkboxes) => {
    const { checked } = event.target;
    setCheckboxes(prev => {
      const updatedCheckboxes = {
        ...prev,
        [key]: checked,
      };

      const allChecked = Object.values(updatedCheckboxes).every(value => value);
      // setIsCheckedAll(allChecked);

      return updatedCheckboxes;
    });
  };


  const { register, watch, setError, clearErrors, formState: { errors } } = useForm<IFormInputs>();

  // Watch the carNumber field
  const carNumber = watch('carNumber');

  const [checkboxes, setCheckboxes] = React.useState({
    serviceTerms: false,
    privacyPolicy: false,
    locationBased: false,
    marketing: false,
  });

  const buttonStyle = {
    padding: '0px',
    border: '0px',
    width: '100%',
    height: '46px',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: 'normal',
    borderRadius: '5px',
    // backgroundColor: isButtonDisabled ? '#d3d3d3' : '#8B63BB', // Gray if disabled, purple if enabled
    // color: isButtonDisabled ? '#a9a9a9' : '#fff', // Gray text if disabled, white text if enabled
    // cursor: isButtonDisabled ? 'not-allowed' : 'pointer', // Pointer cursor if enabled, not-allowed if disabled
  };

  // Validate carNumber in real-time
  React.useEffect(() => {
    const isValidCarNumber = /^([가-힣]{2}[0-9]{1,3}|[0-9]{2,3})[가-힣]{1}[0-9]{4}$/.test(carNumber);

    if (carNumber && !isValidCarNumber) {
      setError('carNumber', { type: 'manual', message: '차량번호 형식이 일치하지 않습니다.' });
    } else if (carNumber) {
      // Clear previous error if the car number is valid
      clearErrors('carNumber');
    }
  }, [carNumber, setError, clearErrors]);

  return (
      <MainContainer>
        <Title
            title="차량 등록"
            leftArrowButtonVisible
            leftOnClick={handleLeftOnClick}
            rightCloseButtonVisible={false}
        />
        <TitleContainer>
           <span style={{
             color: '#8B63BB'
           }}>차량번호를</span>
          <span> 입력해 주세요.</span>
        </TitleContainer>
        <CarNumberInputContainer>
          <CarNumberText>
            차량번호
          </CarNumberText>
          <CarNumberInput
              type="text"
              id="carNumber"
              placeholder="12가3456, 서울12가3456"
              {...register('carNumber', {required: '필수 입력 항목입니다.'})}
          />
        </CarNumberInputContainer>
        <CarNumberErrorContainer>
          {errors.carNumber ? (
              <span style={{color: '#ED1659'}}>{errors.carNumber.message}</span>
          ) : carNumber && (
              <span style={{color: '#20AEE5'}}>차량번호 형식이 일치합니다.</span>
          )}
        </CarNumberErrorContainer>

        <div style={{marginTop: 'auto', width: '100%', marginBottom: '40px'}}>
          <CheckBoxLabel style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            {/* <div style={{display: 'flex', alignItems: 'center'}}>
              <StyledCheckbox
                  type="checkbox"
                  checked={checkboxes.privacyPolicy}
                  // onChange={(e) => handleChange(e, 'privacyPolicy')}
              />
              <ShareRequestGeojuEssentialText>(필수)</ShareRequestGeojuEssentialText>
              <ShareRequestGeojuRequestText> 개인정보 수집 및 이용동의</ShareRequestGeojuRequestText>
            </div> */}
            <div
                style={{flexShrink: 0}}
                onClick={(e) => {
                  e.stopPropagation();
                }}
            >
              {/* <img src={icArrowRightGreySmall} alt="arrow.png" onClick={() => {
                alert('policy 로보내자')
              }}/> */}
            </div>
          </CheckBoxLabel>
          <button
              style={buttonStyle}
              // onClick={handleSubmit(onSubmit)}
              // disabled={isButtonDisabled} // Disable button based on isButtonDisabled
              onClick={() => setIsCarNumberCheckBottomModalVisible(true)}
          >
            약관 동의 및 공유 신청
          </button>



        </div>
        <CarNumberCheckBottomModal
            isVisible={isCarNumberCheckBottomModalVisible}
            onClose={() => setIsCarNumberCheckBottomModalVisible(false)}

        />
      </MainContainer>
  );
};

export default CarRegistration;
