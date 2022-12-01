import { IoArrowBackOutline } from 'react-icons/io5';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as SC from './style';

export const BackIcon = ({ urlToNavigate }) => {
  const navigate = useNavigate();
  return (
    <SC.BackIconContainer
      onClick={() => (urlToNavigate ? navigate(urlToNavigate) : navigate(-1))}
    >
      <IoArrowBackOutline color="white" fontSize="25px" />
    </SC.BackIconContainer>
  );
};
