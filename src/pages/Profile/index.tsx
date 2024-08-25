import React, { useState } from 'react';
import { MainContainer } from "../Login/styles";
import icBurger from '../../assets/ic_burger.svg';
import CheckModal from "../../components/atoms/CheckModal";


const Profile: React.FC = () => {

  const [isApplyCheckModal, setIsApplyCheckModal] = useState(false);

  const handleOpenModal = () => {
    setIsApplyCheckModal(true);
  };

  const handleCloseModal = () => {
    setIsApplyCheckModal(false);
  };
    return (
        <MainContainer>
        <div style={{
            width: '300px',       // 사각형의 너비
            height: '100px',      // 사각형의 높이
            display: 'flex',
            backgroundColor: '#8B63BB', // 배경색
            borderRadius: '10px',
            marginTop: '20px'
        }}>
        <div style={{  
            display: 'flex', 
            flexDirection: 'column',  
            alignItems: 'flex-start', 
            flex: 1 }}>
            <div>안녕하세요!</div>
            <div>01012345678님</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', flex: 1 }} onClick={handleOpenModal}>
      프로필 이미지

      <CheckModal
        isVisible={isApplyCheckModal}
        onClose={handleCloseModal}
        title="Confirm Action"
        content="Are you sure you want to proceed?"
        buttonText="OK"
      />
    </div>
      </div>
      <div style={{
        width: '300px', 
        display: 'flex',
        alignItems: 'center', // 수직 중앙 정렬
        textAlign: 'left',
        borderBottom: '2px solid #000', // 밑줄 추가
        paddingBottom: '10px', // 밑줄과 내용 사이의 여백
        marginTop: '12px'
      }}>
      <img
        src={icBurger}
        alt="Burger Icon"
        style={{
          maxWidth: '50px', // 이미지 크기 조절
          height: 'auto',
          marginRight: '10px', // 이미지와 텍스트 사이의 간격
        }}
        />
        <span>프로필</span>
      </div>
      </MainContainer>
    )
}

export default Profile;