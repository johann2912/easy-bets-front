import styled from 'styled-components';

export const RightWrapper = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding: 5rem;
  gap: 2rem;
  width: 100%;
  height: 100vh;
  background-color: rgba(24, 28, 40, 0.93);
  overflow-y: overlay;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #181c28;
    border-radius: 10px;
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }
`;

export const ResultsListExternalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  width: 100%;
  height: min-content;
`;

export const ResultCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 1rem 2rem;
  gap: 1rem;
  width: 100%;
  color: white;
  font-size: 1rem;
  font-weight: 300;
  border-radius: 20px;
  background-color: rgba(24, 28, 40, 0.2);
  box-shadow: 3px 3px 8px #00000080;
  > div > span {
    font-weight: 500;
  }
  @media (max-width: 1200px) {
    font-size: 0.8rem;
  }
  @media (min-width: 2000px) {
    font-size: 1rem;
  }
`;
