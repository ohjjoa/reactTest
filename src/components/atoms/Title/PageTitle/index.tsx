import { CSSProperties } from '@stitches/react';
import { ReactNode } from 'react';
import { LeftContainer, RightContainer, TitleContainer } from './styles';

interface IProps {
  leftOnClick?: () => void;
  rightOnClick?: () => void;
  title?: string;
  pageTitle?: string;
  pageTotalTitle?: string;
  style?: CSSProperties;
  leftArrowButtonVisible?: boolean;
  rightCloseButtonVisible?: boolean;
  leftNode?: ReactNode;
  rightNode?: ReactNode;
  children?: React.ReactNode;
}
const PageTitle: React.FC<IProps> = ({
  leftOnClick,
  rightOnClick,
  title,
  pageTitle,
  pageTotalTitle,
  style,
  leftArrowButtonVisible,
  rightCloseButtonVisible,
  leftNode,
  rightNode,
  children,
}) => (
  <>
    <TitleContainer style={style}>
      <LeftContainer onClick={leftOnClick} role="presentation" data-id="back">
        {leftNode}
        {leftArrowButtonVisible ? (
          <img
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
            src={'/img/ic_left_arrow.png'}
            role="presentation"
            alt="back"
            data-id="back"
          />
        ) : null}
      </LeftContainer>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          style={{
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '18px',
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
      <RightContainer onClick={rightOnClick} role="presentation" data-id="close">
        {rightNode}
        {rightCloseButtonVisible ? (
          <img
            style={{
              margin: 'auto 16px auto 0px',
              width: '24px',
              height: '24px',
              cursor: 'pointer',
            }}
            src={'/img/ic_close.png'}
            alt="close"
            role="presentation"
          />
        ) : null}
      </RightContainer>
    </TitleContainer>
  </>
);

export default PageTitle;
