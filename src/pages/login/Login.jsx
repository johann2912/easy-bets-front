import { Controller, useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../components/button/Button';
import { FormField } from '../../components/field/Field';
import { Toast } from '../../components/toast/Toast';
import { errorAlert, successAlert } from '../../utils/alerts';
import {
  DocTypesOptions,
  userTypesOptions,
} from '../../utils/form/selectOptions';
import * as SC from './login.style';

export const Login = () => {
  let { pathname } = useLocation();
  const { register, control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log('data =>', data);

    try {
      successAlert('Bienvenido!');
    } catch (error) {
      errorAlert('Credenciales incorrectas!');
    }
  };

  return (
    <SC.MainWrapper>
      <SC.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <SC.InternWrapper>
          <SC.InternWrapperPresentation>
            Bienvenido a <span>APUESTA FACIL</span> tu lugar favorito para hacer
            apuestas!
          </SC.InternWrapperPresentation>
          <SC.InternWrapperDetails>
            {pathname !== '/register' ? (
              <>
                <SC.InputGroup>
                  <FormField
                    desc="Correo"
                    type="email"
                    register={register}
                    regName="email-login"
                  />
                  <FormField
                    desc="Contraseña"
                    type="password"
                    register={register}
                    regName="password-login"
                  />
                </SC.InputGroup>
                <Button type="submit">INICIAR SESIÓN</Button>
                <span>
                  Aún no tienes cuenta? <Link to={'register'}>Registrate!</Link>
                </span>
              </>
            ) : (
              <>
                <SC.InputGroup>
                  <FormField
                    desc="Nick"
                    type="text"
                    register={register}
                    regName="nick"
                  />
                  <FormField
                    desc="Número documento"
                    type="number"
                    register={register}
                    regName="docNumber"
                  />
                  <FormField
                    desc="Tipo documento"
                    Controller={Controller}
                    contName="documentType"
                    control={control}
                    options={DocTypesOptions}
                  />
                  <FormField
                    desc="Correo"
                    type="email"
                    register={register}
                    regName="email"
                  />
                  <FormField
                    desc="Contraseña"
                    type="password"
                    register={register}
                    regName="password"
                  />
                  <FormField
                    desc="Tipo usuario"
                    Controller={Controller}
                    contName="userType"
                    control={control}
                    options={userTypesOptions}
                  />
                </SC.InputGroup>
                <Button type="submit">REGISTRAR</Button>
                <span>
                  Ya tienes cuenta? <Link to={'/'}>Ingresa!</Link>
                </span>
              </>
            )}
          </SC.InternWrapperDetails>
        </SC.InternWrapper>
      </SC.FormWrapper>
      <Toast />
    </SC.MainWrapper>
  );
};
