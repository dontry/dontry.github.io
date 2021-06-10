import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/theme';
import Flex from '../Flex';
import Container from '../Container';
import NavLogo from './NavLogo';
import NavLink from './NavLink';

const Header = styled.header`
  /* background-color: ${props => props.theme.colors.light}; */
  background-color: #fff;
  color: ${props => props.theme.colors.darkGrey};
  position: sticky;
  z-index: 10;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
`;

const StyledFlex = styled(Flex)`
  align-items: center;
  height: 60px;
  ${media.between('small', 'large')`height: 50px;`};
  ${media.lessThan('small')`height: 40px;`};
`;

const NavWrapper = styled(Flex.withComponent('nav'))`
  align-items: stretch;
  justify-self: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  width: 60%;
  ${media.size('xsmall')`
        flex-grow: 1;
        width: auto;
    `} ${media.greaterThan('xlarge')`
        width: null;
    `};
`;

const NavBar = () => {
  const pathname = typeof window !== "undefined" ? window.location.pathname : ""

  return (
    <Header>
      <Container>
        <StyledFlex>
          <NavWrapper>
            <NavLink isActive={pathname === '/'} title="Home" to="/" />
            <NavLink
              isActive={pathname.includes('/archive')}
              title="Archive"
              to="archive"
            />
            <NavLink
              isActive={pathname.includes('/portfolios')}
              title="Portfolios"
              to="portfolios"
            />
            <NavLink
              isActive={pathname.includes('/my_cv')}
              title="Profile"
              to="my_cv"
            />
          </NavWrapper>
        </StyledFlex>
      </Container>
    </Header>
  );
};

export default NavBar;
