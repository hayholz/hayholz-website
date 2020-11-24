import React, { useEffect } from 'react';

export default function ScrollComponent(props) {
  const { children, onScrollHandler} = props;

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);
    return () => window.removeEventListener("scroll", onScrollHandler);
  });

  return (
    <div>
      {children}
    </div>
  );
};