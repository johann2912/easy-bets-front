import styled from 'styled-components';

export const FieldContainter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
  width: 100%;
`;

export const Description = styled.div`
  font-size: 1.1rem;
  color: #5e5e5e;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  font-size: 1rem;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-left: 8px #355fe3 solid;
  border-radius: 5px;
  flex-grow: 1;
  width: 100%;
  height: 2.25rem;
  outline: none;
  box-sizing: border-box;
  padding-left: 5px;
  padding-right: 5px;
`;
