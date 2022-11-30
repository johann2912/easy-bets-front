import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Button } from '../../../../components/button/Button';
import { FormField } from '../../../../components/field/Field';
import { errorAlert, successAlert } from '../../../../utils/alerts';
import * as SC from './modalForRoulette.style';

export const ModalForRoulette = ({ closeModal }) => {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    Aos.init({ duration: 150 });
  }, []);

  const sendUserInfo = (data) => {
    const dataToCreate = { data, successAlert, errorAlert };
    console.log('dataToCreate =>', dataToCreate);
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
              regName="minimunBalance"
            />
            <FormField
              desc="Número mínimo"
              type="number"
              register={register}
              regName="minNumber"
            />
            <FormField
              desc="Número maximo"
              type="number"
              register={register}
              regName="maxNumber"
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
