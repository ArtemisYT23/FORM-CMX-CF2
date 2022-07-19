import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Form,
  FormContent,
  Title,
  FooterImage,
  AditionalInformation,
} from "../../styles/Cotization";
import {
  Input,
  ContainerIconD,
  ContainerIconI,
  Container1Col,
  Container1ColFile,
  Container2Col,
  LabelInput,
  TextArea,
  Selected,
  MessageError,
} from "../../styles/Components";
import { useDispatch, useSelector } from "react-redux";
import {
  SelectedCotizacionAction,
  setValorValidatedAction,
  setRucValidatedAction,
  setEntidadActionCore,
  clearResponsableMessageErrorAction
} from "../../store/DataCoti";
import {
  getAllDataDocument,
  CreateFormNew,
  getAllDocumentFile,
  CambioCotizacion,
} from "../../store/DataNew";
import LabelDataRuc from "../../components/LabelDataRuc";
import Comex from "../../../assets/images/LogoComex.png";
import Central from "../../../assets/images/LogoCentral.png";
import fondoCentral from "../../../assets/icons/fondoCentral.png";
import fondoComex from "../../../assets/icons/fondoComex.png";
import "../../styles/Cotization/Content.css";
import "./Cotization.css";

const Cotizaciones = () => {
  const dispatch = useDispatch();
  const fecha = new Date();
  const requiredChar = "*";
  const r = document.querySelector(":root");
  const [valor, setValor] = useState("");
  const [ruc, setRuc] = useState("");
  const [Document, setDocument] = useState("");
  const [infoAdicional, setInfoAdicional] = useState("");
  const [messageError, setMessageError] = useState("");

  const { core, datos } = useSelector((store) => store);
  const {
    SelectCotizacion,
    RucSelected,
    valorCot,
    RucDataProveedor,
    responsableMessageError,
  } = core;

  const { RequestData, BoolenAproved, Cotization, Num, Codigo } = datos;

  useEffect(() => {
    if (messageError) {
      !RucDataProveedor && setRuc("");
      setTimeout(() => {
        setMessageError("");
        dispatch(clearResponsableMessageErrorAction());
      }, 3000);
    }
  }, [messageError, dispatch, RucDataProveedor]);

  useEffect(() => {
    responsableMessageError && setMessageError(responsableMessageError);
  }, [responsableMessageError]);


  useEffect(() => {
    !RequestData || RequestData.businessName === "COMEXPORT_S.A."
      ? (r.style.setProperty("--PrimaryColor", "#4c607f"),
        (document.body.style.backgroundImage =
          `url('${fondoComex}')`))
      : (r.style.setProperty("--PrimaryColor", "#F68A20"),
        (document.body.style.backgroundImage =
          `url('${fondoCentral}')`));
  }, [RequestData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdate({ ...update, [name]: value });
  };

  const handleSubmit = async (e) => {
    if (RucDataProveedor.providerMail != "") {
      const businessName = {
        businessName: RequestData.businessName,
      };
      const typeBuy = {
        typeBuy: RequestData.typeBuy,
      };
      const categoriesBuy = {
        categoriesBuy: RequestData.categoriesBuy,
      };
      const applicant = {
        applicant: RequestData.applicant,
      };
      const mailApplicant = {
        mailApplicant: RequestData.mailApplicant,
      };
      const departamentConsumer = {
        departamentConsumer: RequestData.departamentConsumer,
      };
      const request = {
        request: RequestData.request,
      };
      const approvedBudget = {};
      const approved = {
        approved: BoolenAproved.state,
      };
      const mailAreaManager = {
        mailAreaManager: RequestData.mailApplicant,
      };
      const mailProvider = {
        mailProvider: RucDataProveedor[0].providerMail,
      };
      const observations = {
        observations: valorCot
      };
      const FormEnvio = Object.assign(
        businessName,
        typeBuy,
        categoriesBuy,
        applicant,
        mailApplicant,
        mailProvider,
        departamentConsumer,
        request,
        mailAreaManager,
        approvedBudget,
        approved,
        observations,
        update
      );
      dispatch(CreateFormNew(FormEnvio, Codigo));
    }
  };
  const navigate = useNavigate();
  const ResEnvio = () => {
    navigate("/Success");
  };

  const [update, setUpdate] = useState({
    cost: 0,
    rucProvider: "",
    purchaseorder: "0",
    selectedProvider: true,
    approvedBudget: true,
    approved: true,
  });

  const url = "data:application/pdf;base64," + Cotization[`${Num}`]?.base64File;
  const Secuencial = [];
  switch (Cotization.length) {
    case 1:
      if (Cotization.length == 1) {
        Secuencial.push(0);
      }
    case 2:
      if (Cotization.length == 2) {
        Secuencial.push(0, 1);
      }
    case 3:
      if (Cotization.length == 3) {
        Secuencial.push(0, 1, 2);
      }
    case 4:
      if (Cotization.length == 4) {
        Secuencial.push(0, 1, 2, 3);
      }
    case 5:
      if (Cotization.length == 5) {
        Secuencial.push(0, 1, 2, 3, 4);
      }
    case 6:
      if (Cotization.length == 6) {
        Secuencial.push(0, 1, 2, 3, 4, 5);
      }
    case 7:
      if (Cotization.length == 7) {
        Secuencial.push(0, 1, 2, 3, 4, 5, 6);
      }
    case 8:
      if (Cotization.length == 8) {
        Secuencial.push(0, 1, 2, 3, 4, 5, 6, 7);
      }
    case 9:
      if (Cotization.length == 9) {
        Secuencial.push(0, 1, 2, 3, 4, 5, 6, 7, 8);
      }
  }

  const cotizati = Math.floor(SelectCotizacion);
  const SelectCotization = cotizati + 1;

  const EnvioForm = (value) => {
    const resValue = Cotization[`${Num}`]?.description + " " + value;
    dispatch(setValorValidatedAction(resValue));
  }

  return (
    <>
      <FormContent>
        <Title>
          {RequestData.businessName === "COMEXPORT_S.A." && <FooterImage src={Comex} />}
          {RequestData.businessName === "CENTRALFILE_S.A." && <FooterImage src={Central} />}
        </Title>
        <AditionalInformation>
          Todos los campos {requiredChar} son obligatorios
        </AditionalInformation>

        <Container1Col>
          <LabelInput>FECHA DEL REQUERIMIENTO</LabelInput>
          <Input value={fecha.toLocaleDateString()} disabled />
        </Container1Col>

        <Container1Col>
          <LabelInput>CODIGO DOCUMENTO</LabelInput>
          <Input value={Codigo} disabled />
        </Container1Col>

        <Container1Col>
          <LabelInput>SOLICITANTE</LabelInput>
          <Input value={RequestData.applicant} disabled />
        </Container1Col>

        <Container1Col>
          <LabelInput>CORREO SOLICITANTE{requiredChar}</LabelInput>
          <Input value={RequestData.mailApplicant} disabled />
        </Container1Col>

        <Container1Col>
          <LabelInput>COTIZACIONES {Cotization[`${Num}`]?.description?.toUpperCase()}</LabelInput>
        </Container1Col>

        <Container1ColFile>
          <Container2Col>
            <iframe className="ContentPdf" src={url} />
          </Container2Col>
        </Container1ColFile>

        <Container1Col>
          <LabelInput>SELECCIONE UNA OFERTA GANADORA</LabelInput>
          <Selected
            onChange={(e) => {
              dispatch(SelectedCotizacionAction(e.target.description)),
                dispatch(CambioCotizacion(e.target.value));
            }}
          >
            <option hidden>Seleccione una cotizacion</option>
            {Cotization ? (
              Cotization.map((id, index) => (
                <option key={index} value={index}>
                  {id.description}
                </option>
              ))
            ) : (
              <></>
            )}
          </Selected>
        </Container1Col>

        {SelectCotizacion != "" && (
          <Container1Col>
            <LabelInput>OFERTA GANADORA</LabelInput>
            <Input id="responsableName" value={Cotization[`${Num}`]?.description} disabled />
          </Container1Col>
        )}

        {SelectCotizacion != "" && (
          <Container1Col>
            <LabelInput>VALOR {requiredChar}</LabelInput>
            <Input
              name="cost"
              type="number"
              value={valor}
              onChange={(e) => {
                setValor(e.target.value), handleChange(e);
              }}
              onBlur={(e) => dispatch(setValorValidatedAction(e.target.value))}
            />
          </Container1Col>
        )}

        {valorCot != "" && (
          <Container1Col>
            <LabelInput htmlFor="CorreoProveedor">
              RUC PROVEEDOR{requiredChar}
            </LabelInput>
            <Input
              name="rucProvider"
              type="number"
              value={ruc}
              onChange={(e) => {
                setRuc(e.target.value), handleChange(e);
              }}
              onBlur={(e) => {
                dispatch(setRucValidatedAction(e.target.value)),
                  dispatch(setEntidadActionCore(e.target.value));
              }}
            />
          </Container1Col>
        )}

        {RucDataProveedor != "" ? (
          <Container1Col>
            {RucDataProveedor ? (
              RucDataProveedor.map((ruc, index) => (
                <LabelDataRuc key={index} providerName={ruc.providerName} />
              ))
            ) : (
              <></>
            )}
          </Container1Col>
        ) : (
          <></>
        )}

        {RucDataProveedor != "" ? (
          <Container1Col>
            <LabelInput>CORREO DEL PROVEEDOR</LabelInput>
            {RucDataProveedor ? (
              RucDataProveedor.map((ruc, index) => (
                <Input key={index} value={ruc.providerMail} disabled />
              ))
            ) : (
              <></>
            )}
          </Container1Col>
        ) : (
          <></>
        )}

        {RucDataProveedor != "" && (
          <Container1Col>
            <LabelInput>INFORMACIÓN ADICIONAL</LabelInput>
            <TextArea
              name="observations"
              value={infoAdicional}
              placeholder="Debe indicar algún detalle adicional si es necesario"
              onChange={(e) => {
                setInfoAdicional(e.target.value), EnvioForm(e.target.value)
              }}
              
            />
          </Container1Col>
        )}

        {RucDataProveedor != "" && (
          <button className="ButtonForm" onClick={(e) => {handleSubmit(e), ResEnvio(e)}}>
            ENVIAR
          </button>
        )}
      </FormContent>

      {messageError ? <MessageError>{messageError}</MessageError> : <></>}
    </>
  );
};

export default Cotizaciones;
