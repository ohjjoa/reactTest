// import { ReactComponent as BellIcon } from '../../../../../public/img/bell.svg';
import { AlarmEmbeddedTitleContainer } from './styles';

export const AlarmEmbeddedTitle = () => {
  return (
    <>
      <AlarmEmbeddedTitleContainer>
        <span>신청내역</span>
        {/* <BellIcon
          width={'24px'}
          style={{
            cursor: 'pointer',
          }}
        /> */}
      </AlarmEmbeddedTitleContainer>
    </>
  );
};
