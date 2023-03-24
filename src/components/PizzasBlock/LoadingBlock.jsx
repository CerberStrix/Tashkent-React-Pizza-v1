import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="138" cy="135" r="125" />
      <rect x="0" y="274" rx="3" ry="3" width="280" height="26" />
      <rect x="0" y="316" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="420" rx="5" ry="5" width="100" height="30" />
      <rect x="146" y="411" rx="20" ry="20" width="134" height="45" />
    </ContentLoader>
  );
}

export default LoadingBlock;
