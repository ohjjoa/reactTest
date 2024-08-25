import React from 'react';
import {
  CarNumberBackGroundContainer,
  CarNumberCheckModalContainer,
  CarNumberCheckModalMainContainer, CarNumberMistakeContainer,
  CarNumberOutlineContainer, CarNumberText, CheckButton, LeftDotImg, RightDotImg
} from "./styles";
// import icDotBlack from "../../../assets/ic/ic_dot_black.svg"
import {useNavigate} from "react-router-dom";

interface BottomModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const CarNumberCheckModal: React.FC<BottomModalProps> = ({ isVisible, onClose }) => {
  const navigate = useNavigate()

  const handleOverlayClick = () => {
    onClose()
  };

  if (!isVisible) return null;

  return (
      <>
        <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              zIndex: 9999,
            }}
            onClick={handleOverlayClick}
        />
        <CarNumberCheckModalContainer isVisible={isVisible}>
          <CarNumberCheckModalMainContainer>
            <span>차량번호를 확인해 주세요!</span>
            <CarNumberBackGroundContainer>
              <CarNumberOutlineContainer>
                {/* <LeftDotImg
                  src={icDotBlack}
                  alt={'왼쪽 점 아이콘'}
                /> */}
                <CarNumberText>
                  345구4567
                </CarNumberText>
                {/* <RightDotImg
                  src={icDotBlack}
                  alt={'점 아이콘2'}
                /> */}
              </CarNumberOutlineContainer>
            </CarNumberBackGroundContainer>

            <CarNumberMistakeContainer>
              <span style={{ color: '#ED1659'}}>차량번호 오기입, 합의 되지 않은 타인 명의의 차량<br/>번호</span>
              등으로 인해 발생하는 민형사상의 법적 책임은
              <br/>
              본인에게 있습니다.
            </CarNumberMistakeContainer>
            <CheckButton
              onClick={() => {
                handleOverlayClick();
                navigate('/reductionCategory');
              }}
            >확인했습니다.
            </CheckButton>
          </CarNumberCheckModalMainContainer>
        </CarNumberCheckModalContainer>
      </>
  );
};

export default CarNumberCheckModal;
