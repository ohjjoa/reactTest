// import { BottomCTA } from '../../components/atoms/Button';
import { CameraFileUpload } from '../../components/atoms/CameraFileUpload';
import { Divider } from '../../components/atoms/Divider';
import { ListDescription } from '../../components/atoms/ListDescription';
// import { ApplyDirectCancelModal } from '../../components/atoms/Modals/ApplyCancelModal/ApplyDirectCancleModal';
// import { DirectDocumentNotiModal } from '../../components/atoms/Modals/DirectDocumentNotiModal';
import PageTitle from '../../components/atoms/PageTitle';
import Title from '../../components/atoms/Title/PageTitle'
// import { useModal } from '../../hooks/useModal';
// import useStores from '../../hooks/useStores';
// import { BasicLayout } from '../../layouts/BasicLayout';
// import { BottomButtonLayout } from '../../layouts/BottomButtonLayout';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
// import { ReactComponent as ArrowIcon } from '../../../../public/img/check/arrow.svg';
// import { ReactComponent as WarningIcon } from '../../../../public/img/ic_warning.svg';
import {
  NotifyButtonContainer,
  // RemoveImageIcon,
  UploadImageSection,
  UploadedImage,
  UploadedImageFileSizeSpan,
  UploadedImageRemoveButton,
  UploadedImageWrapper,
} from './styles';

const descriptionList = [
  '어두운 배경 그림자가 생기지 않도록 촬영해 주세요.',
  '빛 반사를 최소화 해주세요.',
  '암호화해서 서류를 저장하고 있으니 안심해도 됩니다.',
];

function Document() {
  const navigate = useNavigate();
  // const { directStore } = useStores();
  // const { openModal, closeModal } = useModal();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const handleExit = () => {
    // openModal({
    //   content: <ApplyDirectCancelModal />,
    // });
  };

  const handleNotiModal = () => {
    // openModal({
    //   content: <DirectDocumentNotiModal />,
    //   type: 'bottom',
    // });
  };

  const TotalFileCount = observer(() => (
    <UploadedImageFileSizeSpan>
      {/* 최대 사진 갯수({directStore.uploadFileCount}개 / 10개) */}
    </UploadedImageFileSizeSpan>
  ));

  const TotalFileSize = observer(() => (
    <UploadedImageFileSizeSpan>
      최대용량(
      {/* {directStore.uploadFileSize ?? 0} */}
      mb / 80mb)
    </UploadedImageFileSizeSpan>
  ));

  const openRemoveImageModal = (index: number) => {
    // const removeResult = confirm('삭제하시겠습니까?');

    // if (removeResult) {
    //   directStore.removeUploadFile(index);
    // }
  };

  const onSubmit = () => {
    // if (directStore.uploadFileList.length === 0) {
    //   alert('구비서류가 정상적으로 업로드 되었는지 확인해주세요.');
    //   return;
    // }
    // navigate('/direct/confirm-info');
  };

  return (
    <>
      <Title
        title="병원서류 업로드"
        leftArrowButtonVisible
        leftOnClick={() => navigate(-1)}
        rightCloseButtonVisible
        rightOnClick={handleExit}
      />
      <div
        style={{
          padding: '16px',
        }}
      >
        <PageTitle
          style={{
            marginBottom: '20px',
          }}
          title={'서류를\n업로드 해주세요.'}
        />
        <ListDescription theme="gray" list={descriptionList} />
      </div>
      <Divider height="16px" />
      <NotifyButtonContainer onClick={handleNotiModal}>
        <div>
          {/* <WarningIcon fill="black" width={'24px'} /> */}
          <span>필요한 구비서류를 확인해 주세요.</span>
        </div>
        {/* <ArrowIcon width={'16px'} /> */}
      </NotifyButtonContainer>
      <Divider height="16px" />
      <div
        style={{
          padding: '16px 16px 100px 16px',
        }}
      >
        <TotalFileSize />
        <TotalFileCount />
        <UploadImageSection>
          <CameraFileUpload multiple />
          {/* {directStore.uploadFileList.map((file, index) => (
            <UploadedImageWrapper key={`uploadedFile_${index}`}>
              <UploadedImage src={file} alt={`uploadedFile_${index}`} />
              <UploadedImageRemoveButton onClick={() => openRemoveImageModal(index)}>
                <RemoveImageIcon />
              </UploadedImageRemoveButton>
            </UploadedImageWrapper>
          ))} */}
        </UploadImageSection>
      </div>
      <div>
        {/* <BottomCTA
          text="다음"
          // isDisabled={directStore.uploadFileList.length === 0}
          onClick={onSubmit}
        /> */}
      </div>
    </>
  );
}

export default Document;
