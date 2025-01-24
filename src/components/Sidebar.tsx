import React from 'react';

interface SidebarProps {
  children: React.ReactNode;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative h-full w-[200px] sm:block hidden ${className}`}>
      <section>{children}</section>
    </div>
  );
};

export default Sidebar; 