import React from 'react';
import { SideBar } from '../sideBar/SideBar';
import * as SC from './privateLayout.style';

export const PrivateLayout = (children) => {
  return (
    <SC.MainWrapper>
      <SideBar />
      {children}
    </SC.MainWrapper>
  );
};
