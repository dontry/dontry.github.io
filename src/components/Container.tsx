import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => (
  <div className={`mx-auto md:w-[90%] 2xl:max-w-[860px] ${className}`}>
    {children}
  </div>
);

export default Container; 