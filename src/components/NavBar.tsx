import React from 'react';
import Container from './Container';
import NavLink from './NavLink';
import Logo from './Logo';

interface NavBarProps {
  pathname?: string;
}

const NavBar: React.FC<NavBarProps> = ({ pathname = '' }) => {
  return (
    <header className="sticky top-0 left-0 right-0 z-10 w-full bg-white text-dark-grey">
      <Container>
        <div className="flex items-center justify-between border-b px-4 py-2">
          <Logo />
          <nav className="flex items-stretch overflow-x-auto overflow-y-hidden 
            touch-pan-x h-full w-[60%] xs:flex-grow xs:w-auto xl:w-auto ml-10">
            <NavLink isActive={pathname === '/'} title="Home" to="/" />
            <NavLink
              isActive={pathname.includes('/archive')}
              title="Archives"
              to="/archives"
            />
            <NavLink
              isActive={pathname === '/about'}
              title="About"
              to="/about"
            />
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default NavBar; 