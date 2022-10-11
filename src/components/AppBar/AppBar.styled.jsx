import styled from '@emotion/styled';
export const Header = styled.header`
  padding: 20px;
  background-color: #e9e9ff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style-type: none;
`;

export const Item = styled.li`
  padding-right: 20px;
  a {
    color: #333;
    text-decoration: none;
    transition: all 250ms ease-in-out;
  }
  a.active {
    color: red;
    text-decoration: underline;
  }
  a:hover:not(.active),
  a:focus-visible:not(.active) {
    opacity: 0.8;
  }
`;
