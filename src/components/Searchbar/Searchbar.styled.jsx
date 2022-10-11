import styled from '@emotion/styled';
export const Form = styled.form`
  padding: 10px;
  margin-top: 16px;
`;
export const Label = styled.label``;
export const Input = styled.input`
  padding: 6px;
  width: 50%;
  min-width: 250px;
  &:focus {
    outline: none;
    border-color: #aab1f7;
  }
`;
export const Button = styled.button`
  background-color: #aab1f7;
  border-color: #aab1f7;
  cursor: pointer;
  color: #fff;
  border-radius: 4px;
  margin-left: 5px;
  padding: 6px;
  transition: all 250ms ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    opacity: 0.8;
  }
`;
