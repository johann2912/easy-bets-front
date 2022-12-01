import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteRoulette, getAllRoulettes } from '../../api/services/roulettes';
import { Button } from '../../components/button/Button';
import { SideBar } from '../../components/sideBar/SideBar';
import { Toast } from '../../components/toast/Toast';
import { SessionContext } from '../../context/sessionContext';
import { ModalCustomStyles } from '../../styles/customStyles';
import { ModalForRoulette } from './components/ModalForRoulette/ModalForRoulette';
import { SearchBar } from './components/SearchBar/SearchBar';
import * as SC from './dashboard.style';
import { getRouletteSelector } from './reducer/roulettes.reducer';

Modal.setAppElement('#root');

export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logout } = useContext(SessionContext);
  const [filterText, setFilterText] = useState('');
  const [showModalToAdd, setShowModalToAdd] = useState(false);
  const { roulettesList, loadingRoulettes } = useSelector(getRouletteSelector);

  const openModalToAdd = () => {
    setShowModalToAdd(true);
  };

  const closeModalToAdd = () => {
    setShowModalToAdd(false);
  };

  const deleteRouletteProcess = (rouletteId) => {
    dispatch(deleteRoulette(rouletteId));
  };

  useEffect(() => {
    dispatch(getAllRoulettes());
  }, []);

  return (
    <>
      <Modal
        isOpen={showModalToAdd}
        onRequestClose={closeModalToAdd}
        style={ModalCustomStyles}
        contentLabel="Modal For Add Roulette"
      >
        <ModalForRoulette closeModal={closeModalToAdd} />
      </Modal>
      <SC.RightWrapper>
        <SC.SearchRoulettesExternalWrapper>
          <span>RULETAS</span>
          <SC.SearchRoulettesInteractionsWrapper>
            <Button onClick={openModalToAdd}>Agregar</Button>
            <SearchBar filterText={filterText} setFilterText={setFilterText} />
          </SC.SearchRoulettesInteractionsWrapper>
        </SC.SearchRoulettesExternalWrapper>
        <SC.RoulettesListExternalWrapper>
          {!loadingRoulettes ? (
            <SC.RoulettesListWrapper>
              {roulettesList
                .filter(
                  ({ name }) => name.includes(filterText) || filterText === ''
                )
                .map(({ name, minimum_bet_balance, id }) => (
                  <SC.RouletteCardExtWrapper key={id}>
                    <SC.RouletteCardInfoWrapper>
                      <SC.RoultetteNameWrapper>{name}</SC.RoultetteNameWrapper>
                      <SC.MinimumBalanceWrapper>
                        Saldo mínimo: <span>{minimum_bet_balance}</span>
                      </SC.MinimumBalanceWrapper>
                    </SC.RouletteCardInfoWrapper>
                    <SC.RouletteCardInteractsWrapper>
                      <Button
                        bgColor={'#D50000'}
                        width="110px"
                        onClick={() => deleteRouletteProcess(id)}
                      >
                        Eliminar
                      </Button>
                      <Button
                        bgColor={'#1B5E20'}
                        width="110px"
                        onClick={() =>
                          navigate(`/dashboard/roulettes/${id}/results`)
                        }
                      >
                        Resultados
                      </Button>
                      <Button bgColor={'#1976D2'} width="110px">
                        Jugar
                      </Button>
                    </SC.RouletteCardInteractsWrapper>
                  </SC.RouletteCardExtWrapper>
                ))}
            </SC.RoulettesListWrapper>
          ) : (
            <div>Cargando...</div>
          )}
        </SC.RoulettesListExternalWrapper>
      </SC.RightWrapper>
      <Toast />
    </>
  );
};
