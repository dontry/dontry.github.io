import React from 'react';

interface NavLinkProps {
  title: string;
  to: string;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ title, to, isActive }) => {
  const baseClasses = `
    flex flex-row items-center
    text-dark-grey/90 dark:text-gray-300 
    hover:text-dark-grey dark:hover:text-white
    bg-white dark:bg-gray-900 
    hover:bg-light dark:hover:bg-gray-800
    transition-colors duration-200
    px-4 font-light
    xs:px-2 sm:px-2.5 xl:px-5 xl:text-lg
  `;

  return (
    <a 
      href={to} 
      className={`
        ${baseClasses}
        ${isActive ? 'text-gray-800 dark:text-white bg-gray-300 dark:bg-gray-800' : ''}
      `}
    >
      {title}
    </a>
  );
};

export default NavLink; 