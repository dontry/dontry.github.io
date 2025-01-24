import React from 'react';
import Container from './Container';
import NavLink from './NavLink';
import Logo from './Logo';
import Search from './Search';
import ThemeToggle from './ThemeToggle';

interface NavBarProps {
  pathname?: string;
  posts: Array<{
    id: string;
    data: {
      title: string;
      excerpt?: string;
      date?: Date;
      tags?: string[];
    };
  }>;
}

const NavBar: React.FC<NavBarProps> = ({ pathname = '', posts = [] }) => {
  return (
    <header className="sticky top-0 left-0 right-0 z-10 w-full bg-white dark:bg-gray-900 text-dark-grey dark:text-gray-100">
      <Container>
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-4 py-2">
          <Logo />
          <div className="flex items-center flex-1 justify-end gap-4">
            <Search posts={posts} />
            <nav className="flex items-stretch overflow-x-auto overflow-y-hidden touch-pan-x h-full">
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
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default NavBar; 