import { Link } from 'react-router-dom';
import classes from "./index.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.links}>
          <Link to="#">Acerca De.</Link>
          <Link to="#">Blog.</Link>
          <Link to="#">Trabajos.</Link>
          <Link to="#">Ayuda.</Link>
          <Link to="#">API.</Link>
          <Link to="#">Privacidad.</Link>
          <Link to="#">Términos.</Link>
          <Link to="#">Cuentas Principales.</Link>
          <Link to="#">Etiquetas.</Link>
          <Link to="#">Ubicaciones.</Link>
      </div>
      <div className={classes.container}>
        <small className={classes.text}>
          CopyRight &copy; {new Date().getFullYear()} &#9474; Todos Los Derechos Reservados.
                    &#9474; Distribuido Por: <strong><span><b>Instagram App&reg;.</b></span></strong>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
