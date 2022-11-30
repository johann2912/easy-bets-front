import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/button/Button';
import { Toast } from '../../components/toast/Toast';
import { errorAlert, successAlert } from '../../utils/alerts';
import * as SC from './login.style';

const defaultValues = {
  email: '',
  password: '',
};

export const Login = () => {
  const [watchPass, setWatchPass] = useState(false);
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = async (data) => {
    const dataToSingIn = {
      email: data.email.trim(),
      password: data.password,
    };

    try {
      successAlert('Bienvenido!');
    } catch (error) {
      errorAlert('Credenciales incorrectas!');
    }
  };

  const handleWatchPass = () => {
    setWatchPass((prevState) => !prevState);
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
            <SC.InputGroup>
              <SC.Input
                {...register('email')}
                type="email"
                placeholder="Correo"
                autoComplete="off"
                spellCheck="false"
                required
              />
              <SC.InputWrapper>
                <SC.Input
                  {...register('password')}
                  type={watchPass ? 'text' : 'password'}
                  placeholder="Contraseña"
                  spellCheck="false"
                  required
                />
                {watchPass ? (
                  <SC.OpenEyeIcon onClick={handleWatchPass} />
                ) : (
                  <SC.CloseEyeIcon onClick={handleWatchPass} />
                )}
              </SC.InputWrapper>
            </SC.InputGroup>
            <Button type="submit">INICIAR SESIÓN</Button>
            <span>
              Aún no tienes cuenta? <a href="">Regristrate!</a>
            </span>
          </SC.InternWrapperDetails>
        </SC.InternWrapper>
      </SC.FormWrapper>
      <Toast />
    </SC.MainWrapper>
  );
};
