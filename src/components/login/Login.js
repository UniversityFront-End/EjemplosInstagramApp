import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import TextLogo from "../common/logo";
import Input from "../common/input";
import Button from "../common/button";
import Or from "../common/or";
import classes from "./Login.module.css";
import FacebookTextButton from "../common/button/facebook";
import Footer from "../common/footer";
import { Controller, useForm } from "react-hook-form";
import appstore from '../images/app.png';
import playstore from '../images/play.png';


const Login = () => {
  const history = useHistory();
  const { handleSubmit, control, watch } = useForm();
  const [showPassword, setPasswordVisibility] = useState(false);
  const togglePassword = () => setPasswordVisibility((mode) => !mode);
  const onSubmit = handleSubmit(() => {
    history.push("/i");
  });

  const error = false;

  const password = watch("password");

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        
        <div className={classes.content}>
          <TextLogo />
          <div className={classes.body}>
            <form className={classes.form} onSubmit={onSubmit}>
              <div className={classes.formContent}>
                <div className={classes.inputs}>
                  <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Input
                        placeholder="Teléfono, Usuario O Correo Electrónico."
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{ required: true, minLength: 8 }}
                    render={({ field }) => (
                      <Input
                        placeholder="Contraseña."
                        type={showPassword ? "text" : "password"}
                        onClickRightButton={togglePassword}
                        rightButtonLabel={
                          !!password && (showPassword ? "Ocultar" : "Mostrar")
                        }
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className={classes.box}>
                  <Button value="Entrar." type="submit" />
                </div>
                <Or />
                <div className={classes.box}>
                  <FacebookTextButton />
                </div>
              </div>
            </form>
            <div className={classes.box}>
              {error && (
                <p className={classes.error}>
                  Lo Sentimos, Su Contraseña Era Incorrecta. Por Favor Verifique Dos Veces Su
                  Clave.
                </p>
              )}
            </div>
            <Link to="/forgot" className={classes.link}>
              ¿Has Olvidado La Contraseña?
            </Link>
          </div>
        </div>
        <div className={classes.signup}>
          <div className={classes.signupContent}>
            <p className={classes.signupText}>
              ¿No Tienes Una Cuenta?{" "}
              <Link className={classes.signupLink} to="/signup">
                Regístrate.
              </Link>
            </p>
          </div>
        </div>
        <div className={classes.DescargaAPP_A1}>
            <p className={classes.DescargaAPP_A2}>
                Descarga La Aplicación.
            </p>
            <div className={classes.DescargaAPP_A3}>
                <Link to="#" className={classes.DescargaAPPlink}>
                  <img className={classes.DescargaAPP_A4} alt="Instagram" src={appstore} width="136px" />
                </Link>
                <Link to="#" className={classes.DescargaAPPlink}>
                  <img className={classes.DescargaAPP_A4} alt="Instagram" src={playstore} width="136px" />
                </Link>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
