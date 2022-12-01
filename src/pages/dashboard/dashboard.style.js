import styled from 'styled-components';

export const RightWrapper = styled.div`
  height: 100vh;
  background-color: rgba(24, 28, 40, 0.93);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  overflow-y: overlay;
  padding: 2rem 2.5rem 4rem 2.5rem;
  gap: 2rem;
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

// ----------------------------------------

// export const InternRightWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   box-sizing: border-box;
//   width: 100%;
//   overflow-y: overlay;
//   /* padding: 2rem 5rem 3rem; */
//   gap: 1rem;
//   &::-webkit-scrollbar {
//     width: 10px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background-color: #181c28;
//     border-radius: 10px;
//     width: 10px;
//   }

//   &::-webkit-scrollbar-track {
//     background-color: transparent;
//     border-radius: 10px;
//   }
// `;

export const SearchRoulettesExternalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 30px;
  font-weight: 500;
  color: white;
  gap: 1rem;
`;

export const SearchRoulettesInteractionsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const RoulettesListExternalWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  width: 100%;
  height: min-content;
`;

export const RoulettesListWrapper = styled.div`
  display: grid;
  width: 100%;
  height: min-content;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2.5rem;
  row-gap: 2rem;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 2000px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const RouletteCardExtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RouletteCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1rem;
  gap: 0.25rem;
  height: 150px;
  color: white;
  font-size: 1.7rem;
  font-weight: 300;
  border-radius: 20px;
  background-color: rgba(24, 28, 40, 0.2);
  box-shadow: 3px 3px 8px #00000080;
`;

export const RoultetteNameWrapper = styled.div`
  display: flex;
  width: 100%;
  height: min-content;
  font-size: 20px;
  font-weight: 400;
`;

export const MinimumBalanceWrapper = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 400;
  gap: 0.25rem;
  > span {
    font-weight: 300;
  }
`;

export const RouletteCardInteractsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;
