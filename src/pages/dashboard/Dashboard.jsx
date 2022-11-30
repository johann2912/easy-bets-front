import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button/Button';
import { ModalCustomStyles } from '../../styles/customStyles';
import { ModalForRoulette } from './components/ModalForRoulette/ModalForRoulette';
import { SearchBar } from './components/SearchBar/SearchBar';
import { roulettesList } from './constants';
import * as SC from './dashboard.style';

Modal.setAppElement('#root');

export const Dashboard = () => {
  const navigate = useNavigate();
  const [filterText, setFilterText] = useState('');
  const [showModalToAdd, setShowModalToAdd] = useState(false);

  const openModalToAdd = () => {
    setShowModalToAdd(true);
  };

  const closeModalToAdd = () => {
    setShowModalToAdd(false);
  };

  return (
    <SC.MainWrapper>
      <Modal
        isOpen={showModalToAdd}
        onRequestClose={closeModalToAdd}
        style={ModalCustomStyles}
        contentLabel="Modal For Add Roulette"
      >
        <ModalForRoulette closeModal={closeModalToAdd} />
      </Modal>
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
            <Button bgColor={'#D50000'}>Cerrar sesión</Button>
          </SC.LogoutWrapper>
        </SC.VisualsWrapper>
      </SC.LeftWrapper>
      <SC.RightWrapper>
        <SC.SearchRoulettesExternalWrapper>
          <span>RULETAS</span>
          <SC.SearchRoulettesInteractionsWrapper>
            <Button onClick={openModalToAdd}>Agregar</Button>
            <SearchBar filterText={filterText} setFilterText={setFilterText} />
          </SC.SearchRoulettesInteractionsWrapper>
        </SC.SearchRoulettesExternalWrapper>
        <SC.RoulettesListExternalWrapper>
          <SC.RoulettesListWrapper>
            {roulettesList
              .filter(
                ({ name }) => name.includes(filterText) || filterText === ''
              )
              .map(({ name, minimumBalance }) => (
                <SC.RouletteCardExtWrapper key={name}>
                  <SC.RouletteCardInfoWrapper>
                    <SC.RoultetteNameWrapper>{name}</SC.RoultetteNameWrapper>
                    <SC.MinimumBalanceWrapper>
                      Saldo mínimo: <span>{minimumBalance}</span>
                    </SC.MinimumBalanceWrapper>
                  </SC.RouletteCardInfoWrapper>
                  <SC.RouletteCardInteractsWrapper>
                    <Button bgColor={'#D50000'} width="110px">
                      Eliminar
                    </Button>
                    <Button bgColor={'#1B5E20'} width="110px">
                      Resultados
                    </Button>
                    <Button bgColor={'#1976D2'} width="110px">
                      Jugar
                    </Button>
                  </SC.RouletteCardInteractsWrapper>
                </SC.RouletteCardExtWrapper>
              ))}
          </SC.RoulettesListWrapper>
        </SC.RoulettesListExternalWrapper>
      </SC.RightWrapper>
    </SC.MainWrapper>
  );
};
