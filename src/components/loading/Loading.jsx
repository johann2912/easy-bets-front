import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';

const LoadingCont = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 90%;
  justify-content: center;
  align-items: center;
  z-index: 9999999999999999999999999999999999999;
`;

export const Loading = ({ width, height }) => {
  return (
    <LoadingCont>
      <ClipLoader color="#355FE3" size={150} />
    </LoadingCont>
  );
};
