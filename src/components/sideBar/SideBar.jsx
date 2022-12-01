import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../../context/sessionContext';
import { Button } from '../button/Button';
import * as SC from './sideBar.style';

export const SideBar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(SessionContext);
  return (
    <SC.LeftWrapper>
      <SC.VisualsWrapper>
        <SC.ApptNameWrapper>APUESTA FACIL</SC.ApptNameWrapper>
        <SC.InteractionsWrapper>
          <Button onClick={() => navigate('/dashboard/roulettes')}>
            RULETAS
          </Button>
          <Button>ADQUIRIR CREDITOS</Button>
          <Button>HISTORIAL DE APUESTAS</Button>
        </SC.InteractionsWrapper>
        <SC.LogoutWrapper>
          <Button bgColor={'#D50000'} onClick={logout}>
            Cerrar sesión
          </Button>
        </SC.LogoutWrapper>
      </SC.VisualsWrapper>
    </SC.LeftWrapper>
  );
};
