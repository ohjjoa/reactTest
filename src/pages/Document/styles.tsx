import { styled } from '@stitches/react';
// import {ReactComponent as XIcon} from '../../../../public/img/ic-x-circle.svg';

export const NotifyButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '19px 16px',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '-0.4px',
  div: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
});

export const UploadImageSection = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '20px',
  justifyContent: 'space-between',
  label: {
    width: '100%',
    aspectRatio: '1 / 1',
  },
});

export const UploadedImage = styled('img', {
  border: '1px solid #DDD',
  aspectRatio: '1 / 1',
  width: '100%',
  borderRadius: '4px',
});

export const UploadedImageWrapper = styled('div', {
  position: 'relative',
});

export const UploadedImageRemoveButton = styled('button', {
  position: 'absolute',
  top: 0,
  right: 0,
  borderRadius: '50%',
  transform: 'translate(10px, -10px)',
  width: '24px',
  height: '24px',
  backgroundColor: '#ffffff',
  '&:active': {
    opacity: 0.8,
  }
})

export const UploadedImageFileSizeSpan = styled('span', {
  fontSize: '12px',
  lineHeight: '18px',
  marginBottom: '12px',
  fontWeight: 400,
});

// export const RemoveImageIcon = styled(XIcon, {
//   width: '24px',
//   height: '24px',
//   svg: {
//     backgroundColor: '#ffffff',
//   },
//   path: {
//     fill: '#BBBBBB',
//   }
// })