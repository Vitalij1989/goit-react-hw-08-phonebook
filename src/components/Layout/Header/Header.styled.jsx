import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBackground = styled.header`
  background-color: #07345a;
`;
export const HeaderNav = styled.nav`
  display: flex;
`;
export const HeaderWrap = styled.div`
  display: flex;
  padding: 15px 0;
`;

export const HeaderLink = styled(NavLink)`
  display: block;
  cursor: pointer;
  color: #ffffff;
  margin-left: 50px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
  text-transform: capitalize;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    border-bottom-width: 4px;
    --tw-border-opacity: 1;
    border-color: rgb99 102 241;
    --tw-text-opacity: 1;
    color: #ffff01;
  }
  &.active {
    color: #ff0101;
  }
`;
