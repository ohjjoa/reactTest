import React from "react";

const ParkingShared = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center' 
    }}>
      <div>공유 중인 주차장이 없습니다.</div>
      <div style={{ marginTop: '12px'}}>
        비어있는 주차 공간을 공유하고<br />
        우리동네 부정주차 문제 해결과 부가 수익을 창출하세요
      </div>

      <div style={{
         width: '300px',       
         height: '100px',      
         display: 'flex',
         backgroundColor: '#8B63BB', 
         borderRadius: '10px',
         marginTop: '20px'
      }}>
        <div style={{  
            display: 'flex', 
            flexDirection: 'column',  
            alignItems: 'flex-start', 
            flex: 1 }}>
            <div>부설 주차장</div>
            <div>빌라, 오피스, 상가 등</div>
            <div>일반 주차장</div>
            <button onClick={() => {
                alert('신천하기 클릭')
            }}>
                신정하기
            </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column',  alignItems: 'flex-start', flex: 1}} onClick={() => {
            alert('사진 클릭')
        }}>
            사진
        </div>
      </div>
      <div>
        주차장 유형을 선택 후 공유신청하시면 등록된 연락처로<br />순차적 안내를 드립니다.
      </div>
    </div>     
  );
}

export default ParkingShared;
