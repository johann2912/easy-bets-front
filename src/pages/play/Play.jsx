import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRouletteById, runnedRoulette } from '../../api/services/roulettes';
import { BackIcon } from '../../components/backIcon';
import { Button } from '../../components/button/Button';
import { Toast } from '../../components/toast/Toast';
import {
  clearResult,
  getRouletteSelector,
} from '../dashboard/reducer/roulettes.reducer';
import * as SC from './play.style';

export const Play = () => {
  const dispatch = useDispatch();
  const { rouletteId } = useParams();
  const [numberToPlay, setNumberToPlay] = useState('');
  const { currentRoulete, loadingRoulette, result } =
    useSelector(getRouletteSelector);

  const onChangeNumberToPlay = (e) => {
    setNumberToPlay(e.target.value);
  };

  const sendInfo = (e) => {
    e.preventDefault();
    if (rouletteId) {
      dispatch(
        runnedRoulette({ rouletteId, playNumber: parseInt(numberToPlay) })
      );
      setNumberToPlay('');
    }
  };

  useEffect(() => {
    if (rouletteId) {
      dispatch(getRouletteById(rouletteId));
      dispatch(clearResult(null));
    }
  }, [dispatch, rouletteId]);

  return (
    <>
      <SC.RightWrapper>
        <BackIcon />
        {!loadingRoulette && currentRoulete ? (
          <SC.InternalRightWrapper>
            <SC.RouletteNameContainer>
              {currentRoulete.name}
            </SC.RouletteNameContainer>
            <SC.RouletteIntervalContainer>
              <SC.RouletteLimitContainer>
                <span>MIN</span>
                <span> {currentRoulete.number_min}</span>
              </SC.RouletteLimitContainer>
              <SC.RouletteLimitContainer>
                <span>MAX</span>
                <span>{currentRoulete.number_max}</span>
              </SC.RouletteLimitContainer>
            </SC.RouletteIntervalContainer>
            <SC.FormWrapper onSubmit={(e) => sendInfo(e)}>
              <SC.InteractionsContainer>
                <SC.DescriptionContainer>
                  Número a apostar:
                </SC.DescriptionContainer>
                <SC.InputContainer>
                  <SC.Input
                    type="number"
                    value={numberToPlay}
                    min={currentRoulete.number_min}
                    max={currentRoulete.number_max}
                    onChange={onChangeNumberToPlay}
                    required
                  />
                </SC.InputContainer>
              </SC.InteractionsContainer>
              <SC.PlayButtonContainer>
                <Button
                  bgColor={!numberToPlay ? 'gray' : '#1976D2'}
                  width="110px"
                  type="submmit"
                  disabled={!numberToPlay}
                >
                  JUGAR
                </Button>
              </SC.PlayButtonContainer>
            </SC.FormWrapper>
            <SC.ResultContainer>
              <span>RESULTADO</span>
              <span>{result ? result.toString() : '-'}</span>
            </SC.ResultContainer>
          </SC.InternalRightWrapper>
        ) : (
          <div>Cargando...</div>
        )}
      </SC.RightWrapper>
      <Toast />
    </>
  );
};
