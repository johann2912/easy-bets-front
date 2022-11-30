import styled from 'styled-components';
import Select from '../select/Select';

export const FieldContainter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
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
  all: unset;
  display: flex;
  flex-grow: 1;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 43px;
  padding: 0.5rem;
  font-size: 15px;
  border-radius: 4px;
  color: white;
  border-left: 10px #355fe3 solid;
  background-color: #282f3f;
  /* font-size: 1rem;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-left: 8px #1fcfcb solid;
  border-radius: 5px;
  flex-grow: 1;
  height: 2.25rem;
  outline: none;
  padding-left: 5px;
  padding-right: 5px; */
`;

export const FormSelect = styled(Select)`
  height: 2.375rem;
`;
