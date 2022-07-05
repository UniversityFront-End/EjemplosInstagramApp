import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import TextLogo from "../common/logo";
import Input from "../common/input";
import Button from "../common/button";
import Or from "../common/or";
import classes from "./Signup.module.css";
import FacebookTextButton from "../common/button/facebook";
import Footer from "../common/footer";
import appstore from '../images/app.png';
import playstore from '../images/play.png';

const Signup = () => {
  const history = useHistory();
  const { control, handleSubmit, watch } = useForm();
  const [showPassword, setPasswordVisibility] = useState(false);
  const togglePassword = () => setPasswordVisibility((mode) => !mode);
  const onSubmit = handleSubmit(() => history.push("/i"));
  const password = watch("password");
  const error = false;

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <div className={classes.content}>
          <TextLogo />
          <div className={classes.body}>
            <form className={classes.form} onSubmit={onSubmit}>
              <h1 className={classes.title}>
                Regístrate Para Ver Fotos Y Vídeos De Tus Amigos.
              </h1>
              <div className={classes.formContent}>
                <div className={classes.box}>
                  <FacebookTextButton />
                </div>
                <Or />
                <div className={classes.inputs}>
                  <Controller
                    name="userid"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Input
                        placeholder="Número De Móvil O Correo Electrónico."
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="fullname"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Input placeholder="Nombre Completo." {...field} />
                    )}
                  />
                  <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Input placeholder="Nombre De Usuario." {...field} />
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Input
                        placeholder="Contraseña."
                        {...field}
                        type={showPassword ? "text" : "password"}
                        onClickRightButton={togglePassword}
                        rightButtonLabel={
                          !!password && (showPassword ? "Ocultar" : "Mostrar")
                        }
                      />
                    )}
                  />
                </div>
              </div>
              {error && (
              <div className={classes.box}>
                <p className={classes.error}>
                  Este Nombre De Usuario No Está Disponible. Por Favor, Intente Con Otro.
                </p>
              </div>
              )}
              <p href="/forgot" className={classes.link}>
                Es Posible Que Los Usuarios De Nuestro Servicio Hayan Subido Tu Información De Contacto En Instagram. 
                <a href="#info" className={classes.linkA1}><b>Más Información</b></a>.
              </p>
              <p href="/forgot" className={classes.link}>
                Al Registrarte, Aceptas Nuestras Condiciones, {" "}
                <a href="#data" className={classes.linkA1}><b>La Política De Datos</b></a> Y{" "}
                <a href="#cookies" className={classes.linkA1}><b>La Política De Cookies</b></a>.
              </p>
              <div className={classes.box}>
                <Button value="Regístrate." type="submit" />
              </div>
            </form>
          </div>
        </div>
        <div className={classes.signup}>
          <div className={classes.signupContent}>
            <p className={classes.signupText}>
              ¿Tienes Una Cuenta?{" "}
              <Link className={classes.signupLink} to="/login">
                Entrar.
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

export default Signup;
