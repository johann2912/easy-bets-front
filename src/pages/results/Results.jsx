import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllRouletteResults } from '../../api/services/roulettes';
import { BackIcon } from '../../components/backIcon';
import { getRouletteSelector } from '../dashboard/reducer/roulettes.reducer';
import * as SC from './results.style';

export const Results = () => {
  const { rouletteId } = useParams();
  const dispatch = useDispatch();
  const { rouletteResults } = useSelector(getRouletteSelector);

  useEffect(() => {
    if (rouletteId) {
      dispatch(getAllRouletteResults(rouletteId));
    }
  }, [dispatch, rouletteId]);

  return (
    <SC.RightWrapper>
      <BackIcon />
      <SC.ResultsListExternalWrapper>
        {rouletteResults.map(({ Roulette, ...general }) => (
          <SC.ResultCardWrapper key={Roulette.id}>
            <div>
              <span>Nombre:</span> {Roulette.name}
            </div>
            <div>
              <span>Minimo:</span> {Roulette.number_min}
            </div>
            <div>
              <span>Maximo:</span> {Roulette.number_max}
            </div>
            <div>
              <span>Cuota:</span> {Roulette.quota}
            </div>
            <div>
              <span>Fecha:</span> {general.result_date.split('T')[0]}
            </div>
            <div>
              <span>resultado:</span> {general.result}
            </div>
          </SC.ResultCardWrapper>
        ))}
      </SC.ResultsListExternalWrapper>
    </SC.RightWrapper>
  );
};
