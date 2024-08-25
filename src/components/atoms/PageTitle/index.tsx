import React, { CSSProperties, ReactNode } from 'react';

interface IPageTitle {
  title: string | ReactNode;
  sub?: string | ReactNode;
  style?: CSSProperties;
}
const PageTitle = ({ title, sub, style }: IPageTitle) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '4px',
          flexDirection: 'column',
          ...style,
        }}
      >
        <span
          style={{
            fontFamily: 'Pretendard',
            fontWeight: 800,
            fontSize: '20px',
            lineHeight: '30px',
            letterSpacing: '-0.4px',
            color: '#111111',
            whiteSpace: 'pre-line',
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '-0.4px',
            color: '#99A2AC',
          }}
        >
          {sub}
        </span>
      </div>
    </>
  );
};

export default React.memo(PageTitle);
