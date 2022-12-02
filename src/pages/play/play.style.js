import styled from 'styled-components';

export const RightWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 1rem;
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
  gap: 2.5rem;
  width: max-content;
  height: max-content;
  border-radius: 20px;
`;

export const FormWrapper = styled.form`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const RouletteNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  font-weight: 500;
  color: white;
  text-align: center;
`;

export const RouletteIntervalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1rem;
  width: min-content;
  gap: 2rem;
  border-radius: 20px;
  border: 3px solid white;
`;

export const RouletteLimitContainer = styled.div`
  display: flex;
  flex-direction: column;
  > span {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: white;
    :first-child {
      font-size: 45px;
      font-weight: 400;
    }
    :nth-child(2) {
      font-size: 35px;
      font-weight: 500;
    }
  }
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
  width: 150px;
`;

export const Input = styled.input`
  all: unset;
  display: flex;
  flex-grow: 1;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  height: 46px;
  padding: 1rem;
  font-size: 20px;
  border-radius: 10px;
  color: white;
  background-color: #181c28;
`;

export const PlayButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;
  > span {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: white;
    :first-child {
      font-size: 45px;
      font-weight: 500;
      height: 30px;
    }
    :nth-child(2) {
      font-size: 100px;
      font-weight: 800;
      height: 30px;
    }
  }
`;
