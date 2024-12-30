import React from 'react';
import Container from './Container';
import NavLink from './NavLink';
import Logo from './Logo';
import Search from './Search';

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
    <header className="sticky top-0 left-0 right-0 z-10 w-full bg-white text-dark-grey">
      <Container>
        <div className="flex items-center justify-between border-b px-4 py-2">
          <Logo />
          <div className="flex items-center flex-1 justify-end gap-4">
            {/* <SearchProvider posts={posts} /> */}
            <Search posts={posts} />
            <nav className="flex items-stretch overflow-x-auto overflow-y-hidden 
              touch-pan-x h-full">
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
        </div>
      </Container>
    </header>
  );
};

export default NavBar; 