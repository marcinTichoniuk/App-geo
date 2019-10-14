import React from 'react';

const Banner = ({ title, className, children }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Banner;