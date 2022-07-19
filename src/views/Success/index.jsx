import { FormSuccess, FooterImage, FormSuccess2 } from "../../styles/Requeriment";
import Comex from "../../../assets/images/LogoComex.png";
import Central from "../../../assets/images/LogoCentral.png";
import "./Parrafo.css";
import { useSelector, useDispatch } from "react-redux";
const Success = () => {

  const { datos } = useSelector((store) => store);
  const { RequestData } = datos;
  
  return (
    <>
      <FormSuccess>
        <div className="Iam">
          <p>Formulario Enviado Con Éxito</p>
          <b>
            <div className="innerIam">
              SOMOS CENTRALFILE
              <br />
              Su Aliado en 
              <br />
              Soluciones Informáticas
              <br />
              Digitalización
              <br />
              MailRoom
            </div>
          </b>
        </div>
        </FormSuccess>
        <FormSuccess2>
          {RequestData.businessName === "COMEXPORT_S.A." && <FooterImage src={Comex} />}
          {RequestData.businessName === "CENTRALFILE_S.A." && <FooterImage src={Central} />}
          
        </FormSuccess2>
    </>
  );
};

export default Success;
