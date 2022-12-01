import styled from 'styled-components';

export const LeftWrapper = styled.div`
  display: flex;
  width: 280px;
  height: 100vh;
  background-color: #181c28;
`;

export const VisualsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
`;

export const ApptNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  user-select: none;
  box-sizing: border-box;
  width: 100%;
  color: white;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;

export const InteractionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  gap: 1rem;
  padding: 2rem;
`;

export const LogoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 2rem;
`;
