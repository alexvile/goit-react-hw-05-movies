import styled from '@emotion/styled';
export const Header = styled.header`
  padding: 20px;
  background-color: #e9e9ff;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style-type: none;
`;

export const Item = styled.li`
  padding-right: 20px;
  a.active {
    outline: 1px solid black;
  }
  a:hover:not(.active),
  a:focus-visible:not(.active) {
    color: green;
  }
`;
