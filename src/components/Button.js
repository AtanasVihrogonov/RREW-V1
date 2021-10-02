import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#000d1a' : 'cd853f')};
  color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
  padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
  font-size: ${({ big }) => (big ? '20px' : '14px')};
  white-space: nowrap;
  outline: none;
  border: none;
  text-decoration: none;
  max-width: 200px;
  min-width: 100px;
  cursor: pointer;
  transform: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-2px);
  }
`;
