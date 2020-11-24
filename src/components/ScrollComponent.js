import React, { useEffect } from 'react';

export default function ScrollComponent(props) {
  const { children, onScrollHandler, divRef} = props;

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);
    return () => window.removeEventListener("scroll", onScrollHandler);
  });

  return (
    <div ref={divRef}>
      {children}
    </div>
  );
};