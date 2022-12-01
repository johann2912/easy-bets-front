import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { createRoulette } from '../../../../api/services/roulettes';
import { Button } from '../../../../components/button/Button';
import { FormField } from '../../../../components/field/Field';
import { errorAlert, successAlert } from '../../../../utils/alerts';
import * as SC from './modalForRoulette.style';

export const ModalForRoulette = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    Aos.init({ duration: 150 });
  }, []);

  const sendUserInfo = (data) => {
    const { name, minimum_bet_balance, number_min, number_max, quota } = data;
    const createRouletteData = {
      name,
      minimum_bet_balance: parseInt(minimum_bet_balance),
      number_min: parseInt(number_min),
      number_max: parseInt(number_max),
      quota: parseInt(quota),
    };
    dispatch(createRoulette(createRouletteData));
    closeModal();
  };

  return (
    <SC.MainModalWrapper data-aos="zoom-in">
      <SC.CloseIconWrapper onClick={closeModal}>
        <AiFillCloseCircle color="white" fontSize="25px" />
      </SC.CloseIconWrapper>
      <SC.TitleContainer>
        <span>Crear ruleta</span>
      </SC.TitleContainer>
      <SC.Form onSubmit={handleSubmit(sendUserInfo)}>
        <SC.InteractionsWrapper>
          <SC.FormFieldGroup>
            <FormField
              desc="Nombre"
              type="text"
              register={register}
              regName="name"
            />
            <FormField
              desc="Saldo mínimo"
              type="number"
              register={register}
              regName="minimum_bet_balance"
            />
            <FormField
              desc="Número mínimo"
              type="number"
              register={register}
              regName="number_min"
            />
            <FormField
              desc="Número maximo"
              type="number"
              register={register}
              regName="number_max"
            />
            <FormField
              desc="Cuota"
              type="number"
              register={register}
              regName="quota"
            />
          </SC.FormFieldGroup>
          <Button type="submit" fontSize="20px">
            Enviar
          </Button>
        </SC.InteractionsWrapper>
      </SC.Form>
    </SC.MainModalWrapper>
  );
};
