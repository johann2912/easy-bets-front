import React, { useState } from 'react';
import { adquireCredits } from '../../api/services/auth';
import { BackIcon } from '../../components/backIcon';
import { Button } from '../../components/button/Button';
import { Toast } from '../../components/toast/Toast';
import * as SC from './adquireCredits.style';

export const AdquireCredits = () => {
  const [credits, setCredits] = useState('');

  const onChangeCredits = (e) => {
    setCredits(e.target.value);
  };

  const getCredits = async (data) => {
    const adquireCreditsData = {
      balance: parseInt(credits),
    };
    await adquireCredits({
      adquireCreditsData,
    });
    setCredits('');
  };

  return (
    <>
      <SC.RightWrapper>
        <BackIcon />
        <SC.InternalRightWrapper>
          <SC.InteractionsContainer>
            <SC.DescriptionContainer>Creditos:</SC.DescriptionContainer>
            <SC.InputContainer>
              <SC.Input
                type="number"
                value={credits}
                onChange={onChangeCredits}
              />
            </SC.InputContainer>
          </SC.InteractionsContainer>
          <SC.ButtonsContainer>
            <Button
              bgColor={!credits ? 'gray' : '#1B5E20'}
              width="110px"
              onClick={getCredits}
              disabled={!credits}
            >
              Comprar
            </Button>
          </SC.ButtonsContainer>
        </SC.InternalRightWrapper>
      </SC.RightWrapper>
      <Toast />
    </>
  );
};
