import styled from 'styled-components';

export const MainModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 350px;
  height: min-content;
  border-radius: 10px;
  box-shadow: 3px 3px 10px #0000002e;
  background: #181c28 0% 0% no-repeat padding-box;
`;

export const CloseIconWrapper = styled.div`
  position: absolute;
  right: 7.5px;
  top: 5px;
  width: 25px;
  height: 25px;
  transition: all 0.2s;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  font-size: 27px;
  font-weight: bold;
  color: white;
  background-color: var(--blue);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  span {
    display: flex;
    align-items: center;
    height: min-content;
    padding-bottom: 5px;
    box-sizing: border-box;
  }
`;

export const Form = styled.form`
  all: unset;
`;

export const FormFieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const InteractionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 1rem 2rem;
  gap: 1.5rem;
`;
