// import useStores from 'hooks/useStores';
import { observer } from 'mobx-react';
import { useEffect, useId, useState } from 'react';
// import { cameraCheck } from 'utils/CameraUtil';
// import HeicUtils from 'utils/HeicUtils';
// import { ReactComponent as CameraIcon } from '../../../../public/img/ic_camera.svg';
// import { useDeviceUtil } from '../../../hooks/useDeviceUtil';
import { CameraFileUploadContainer } from './styles';

interface CameraFileUploadProps {
  multiple?: boolean;
}

export const CameraFileUpload = observer(({ multiple }: CameraFileUploadProps) => {
  // const uuid = useId();
  // // const { directStore } = useStores();
  // // const { showPermission, isCameraPermission } = useDeviceUtil();
  // const [isPermission, setIsPermission] = useState('false');

  // const handleFile = async (file: FileList | null) => {
  //   if (!file) return;

  //   const tempList = directStore.uploadFileSizeList;
  //   if (file.length > 10 || tempList.length + file.length > 10) {
  //     alert('최대 10개까지 등록 가능합니다.');
  //     return;
  //   }
  //   let totalSize = tempList.reduce((prev, acc) => prev + acc, 0);

  //   Object.keys(file).forEach((key) => {
  //     totalSize += file[Number(key)].size;
  //     const totalSizeMB = totalSize / 1e6;

  //     if (totalSizeMB > 80) {
  //       alert('한 번에 발송 가능한 파일들의 최대 용량은 80MB입니다.');
  //       return;
  //     }

  //     HeicUtils.heicToJpg(
  //       file[Number(key)],
  //       (successFile) => {
  //         new Promise((resolve, reject) => {
  //           const reader = new FileReader();
  //           reader.readAsDataURL(successFile);
  //           reader.onload = () => resolve(reader.result);
  //           reader.onerror = (error) => reject(error);
  //         })
  //           .then((data) => {
  //             if (typeof data === 'string') {
  //               directStore.setUploadFileList(data);
  //               directStore.setUploadFileSize(file[Number(key)].size);
  //             } else {
  //               alert('이미지 추가에 실패하였습니다.');
  //             }
  //           })
  //           .catch((error) => {
  //             console.log(error);
  //             alert('이미지 추가에 실패하였습니다.');
  //           });
  //       },
  //       () => {
  //         alert('이미지 변환 오류, 카메라에서 고효율 설정을 해제 후 다시 촬영 부탁드립니다.');
  //       },
  //     );
  //   });
  // };

  // const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
  //   cameraCheck(e);
  //   if (directStore.uploadFileSizeList.length >= 10) {
  //     alert('파일 개수는 10개를 초과할 수 없습니다.');
  //     e.preventDefault();
  //   }
  // };

  // useEffect(() => {
  //   const eventIsCameraPermission = async (event: any) => {
  //     const isCameraPermission = event.detail.data;
  //     setIsPermission(isCameraPermission);
  //     if (isCameraPermission !== 'true') {
  //       showPermission();
  //     } else {
  //       document.getElementById('fileUploader')?.click();
  //     }
  //   };

  //   window.addEventListener('isCameraPermission', eventIsCameraPermission);

  //   return () => {
  //     window.removeEventListener('isCameraPermission', eventIsCameraPermission);
  //   };
  // }, []);

  return (
    <>
      <label htmlFor={''}>
        <CameraFileUploadContainer id={'fileUploader'}>
          {/* <CameraIcon width={'48px'} /> */}
          <span>등록하기</span>
        </CameraFileUploadContainer>
        <input
          type="file"
          multiple={multiple}
          accept=".heic,image/*"
          name={''}
          id={''}
          onClick={(e) => {
            
          } }
          onChange={(e) => {
            // handleFile(e.target.files);
          }}
          style={{
            display: 'none',
          }}
        />
      </label>
    </>
  );
});
