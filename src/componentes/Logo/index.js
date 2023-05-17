import "./estilo.css";
import logo from "../../imagens/logo.png";
import blood from "../../imagens/test1.png";

function Logo() {
  return (
    <div className="logo">
      <img className="logo-img" src={logo} alt="logo"></img>
      <p>
        <strong>
          VA<img className="icon-img " src={blood} alt="dentes"></img>P
        </strong>
        ÁGINAS
      </p>
    </div>
  );
}

export default Logo;
