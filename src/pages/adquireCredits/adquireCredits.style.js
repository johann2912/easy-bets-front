import styled from 'styled-components';

export const RightWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-color: rgba(24, 28, 40, 0.93);
`;

export const InternalRightWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  gap: 3rem;
  width: max-content;
  height: max-content;
  border-radius: 20px;
`;

export const InteractionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 1.25rem;
  font-style: 500;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100px;
`;

export const Input = styled.input`
  all: unset;
  display: flex;
  flex-grow: 1;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 46px;
  padding: 1rem;
  font-size: 20px;
  border-radius: 10px;
  color: white;
  background-color: #181c28;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
