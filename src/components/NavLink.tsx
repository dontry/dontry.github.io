import React from 'react';

interface NavLinkProps {
  title: string;
  to: string;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ title, to, isActive }) => {
  const baseClasses = `
    flex flex-row items-center
    text-dark-grey/90 hover:text-dark-grey
    bg-white hover:bg-light
    transition-colors duration-200
    px-4 font-light
    xs:px-2 sm:px-2.5 xl:px-5 xl:text-lg
  `;

  return (
    <a 
      href={to} 
      className={`
        ${baseClasses}
        ${isActive ? 'text-gray-800 bg-gray-300' : ''}
      `}
    >
      {title}
    </a>
  );
};

export default NavLink; 