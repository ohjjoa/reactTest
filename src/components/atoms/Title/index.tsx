import React, { CSSProperties, ReactNode } from 'react';
// import GreenSpacer from '../GreenSpacer';
import { TitleContainer } from './styles';
import leftArrowIcon from '../../../assets/ic_left_arrow.png'; // Adjust the path accordingly


interface IProps {
  // eslint-disable-next-line react/require-default-props
  leftOnClick?: () => void;
  rightOnClick?: () => void;
  // eslint-disable-next-line react/require-default-props
  title?: any;
  pageTitle?: string;
  pageTotalTitle?: string;
  style?: CSSProperties;
  leftArrowButtonVisible: boolean;
  rightCloseButtonVisible: boolean;
  rightCustomButton?: ReactNode;
  children?: React.ReactNode;
}

const TitleComponent: React.FC<IProps> = ({
  leftOnClick,
  rightOnClick,
  title,
  pageTitle,
  pageTotalTitle,
  style,
  leftArrowButtonVisible,
  rightCloseButtonVisible,
  rightCustomButton,
  children,
}) => (
  <>
    <div>
      <TitleContainer style={style}>
        {leftArrowButtonVisible ? (
          <button
            type="button"
            style={{
              margin: 'auto 0px auto 16px',
              width: '30px',
              height: '30px',
              cursor: 'pointer',
            }}
            onClick={leftOnClick}
            data-id="back"
          >
            <img width={'100%'} src={leftArrowIcon} alt="arrow.png" />
          </button>
        ) : (
          <div style={{ margin: 'auto 0px auto 16px', width: '30px', height: '30px' }} />
        )}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              fontSize: '16px',
              fontWeight: '600',
              margin: pageTitle ? '12px auto 0px auto' : 'auto',
            }}
          >
            {title}
          </div>
          {pageTitle && (
            <div style={{ fontSize: '10px', margin: '4px auto 10px auto', letterSpacing: '2px' }}>
              {pageTitle}/{pageTotalTitle}
            </div>
          )}
        </div>
        {rightCustomButton || null}
        {rightCloseButtonVisible ? (
          <button type="button" onClick={rightOnClick}>
            <img
              style={{ margin: 'auto 16px auto 0px', width: '24px', height: '24px' }}
              src={'/img/ic_close.png'}
              alt="close"
              role="presentation"
              data-id="close"
            />
          </button>
        ) : (
          <div style={{ margin: 'auto 16px auto 0px', width: '30px', height: '30px' }} />
        )}
      </TitleContainer>
      {/* <GreenSpacer spacer={56} /> */}
    </div>
    {children}
  </>
);

export default TitleComponent;
