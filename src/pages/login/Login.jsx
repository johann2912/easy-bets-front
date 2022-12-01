import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginService, registerService } from '../../api/services/auth';
import { Button } from '../../components/button/Button';
import { FormField } from '../../components/field/Field';
import { Toast } from '../../components/toast/Toast';
import { SessionContext } from '../../context/sessionContext';
import { errorAlert, successAlert } from '../../utils/alerts';
import {
  DocTypesOptions,
  userTypesOptions,
} from '../../utils/form/selectOptions';
import * as SC from './login.style';

export const Login = () => {
  let Navigate = useNavigate();
  let { pathname } = useLocation();
  const { login } = useContext(SessionContext);
  const { register, control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (pathname !== '/register') {
      const { emailLogin, passwordLogin } = data;
      const { loginStatus, userInfo } = await loginService(
        emailLogin,
        passwordLogin
      );
      login(loginStatus, userInfo);
    } else {
      const dataToRegister = {
        nick_name: data.nick_name,
        document_number: data.document_number,
        document_type: data.document_type.value,
        email: data.email,
        password: data.password,
        user_type: data.user_type.value,
      };
      await registerService({
        dataToCreateUser: dataToRegister,
        successAlert,
        errorAlert,
      });
      setTimeout(() => {
        Navigate('/');
      }, 20000);
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
                    regName="emailLogin"
                  />
                  <FormField
                    desc="Contraseña"
                    type="password"
                    register={register}
                    regName="passwordLogin"
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
                    regName="nick_name"
                  />
                  <FormField
                    desc="Número documento"
                    type="number"
                    register={register}
                    regName="document_number"
                  />
                  <FormField
                    desc="Tipo documento"
                    Controller={Controller}
                    contName="document_type"
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
                    contName="user_type"
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
