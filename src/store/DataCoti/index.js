import { validateEmail } from "../../types/validateEmail";
import { validateRuc } from "../../types/validareRuc";
import axios from "axios";
import { CoreInstance, DocumentInstance  } from "../../config/axiosInstance";


const initialState = {
    RucSelected: "",
    RucDataProveedor: "",
    SelectCotizacion: "",
    valorCot: "",
    info:"",
    responsableMessageError: "",
    FilePdf: "" 
};

const SET_RESPONSABLERUC_SUCCESS = "SET_RESPONSABLERUC_SUCCESS";
const SET_RESPONSABLEMESSAGE_ERROR = "SET_RESPONSABLEMESSAGE_ERROR";
const SELECTED_COTIZACION_CORE = "SELECTED_COTIZACION_CORE";
const SELECTE_NONE_COTIZACION = "SELECTE_NONE_COTIZACION";
const SET_RESPONSABLEVALOR_SUCCESS = "SET_RESPONSABLEVALOR_SUCCESS";
const SET_RESPONSABLEMESSAGE_VALOR_ERROR = "SET_RESPONSABLEMESSAGE_VALOR_ERROR";
const SET_RESPONSABLEINFO_SUCCESS = "SET_RESPONSABLEINFO_SUCCESS";
const SET_RESPONSABLEMESSAGE_INFO_ERROR = "SET_RESPONSABLEMESSAGE_INFO_ERROR";
const CLEAR_MESSAGE_ERROR = "CLEAR_MESSAGE_ERROR";
const CHANGE_PDF_STORE = "CHANGE_PDF_STORE";
const CHANGE_PDF_DER_STORE = "CHANGE_PDF_DER_STORE";
const CHANGE_PDF_IZQ_STORE = "CHANGE_PDF_IZQ_STORE";
const GET_SUCCESS_RUC_PROVEEDOR = "GET_SUCCESS_RUC_PROVEEDO";
const GET_ERRORS_RUC_PROVEEDOR = "GET_ERRORS_RUC_PROVEEDOR";

export default function CotiReducer(state = initialState, action) {
    switch (action.type) {
        case SET_RESPONSABLERUC_SUCCESS:
        case SET_RESPONSABLEMESSAGE_ERROR:
        case SELECTED_COTIZACION_CORE:
        case SELECTE_NONE_COTIZACION:
        case SET_RESPONSABLEVALOR_SUCCESS:
        case SET_RESPONSABLEMESSAGE_VALOR_ERROR:
        case SET_RESPONSABLEINFO_SUCCESS:
        case SET_RESPONSABLEMESSAGE_INFO_ERROR:
        case CLEAR_MESSAGE_ERROR:
        case CHANGE_PDF_STORE:
        case CHANGE_PDF_DER_STORE:
        case CHANGE_PDF_IZQ_STORE:
        case GET_SUCCESS_RUC_PROVEEDOR:
        case GET_ERRORS_RUC_PROVEEDOR:
            return action.payload;
        default:
            return state;
    }
};



//RUC del proveedor
export const setRucValidatedAction = (RucSelected) => async(dispatch, getState) => {
    const { core } = getState();
    validateRuc(RucSelected)
    ? dispatch({
        type: SET_RESPONSABLERUC_SUCCESS,
        payload: {
          ...core,
          RucSelected,
          responsableMessageError: "",
        },
      })
    : dispatch({
        type: SET_RESPONSABLEMESSAGE_ERROR,
        payload: {
          ...core,
          RucSelected: "",
          responsableMessageError: "INGRESE UN RUC VALIDO",
        },
      });
}


//Llenar datos del proveedor por medio de la entidad
export const setEntidadActionCore = (ruc) => async (dispatch, getState) => {
    const { core } = getState();
    try {
        const response = await axios({
            url: `${DocumentInstance}FillForm/${ruc}`,
        });
        if( response.status == 200){
            dispatch({
                type: GET_SUCCESS_RUC_PROVEEDOR,
                payload: { ...core, RucDataProveedor: response.data},
            });
        }
    } catch (error) {
        dispatch({
            type: GET_ERRORS_RUC_PROVEEDOR,
            payload: { ...core, RucDataProveedor: "", responsableMessageError: "PROVEEDOR NO EXISTENTE, INGRESE UN DE NUEVO"}
        })
    }
}


//Seleccionar Cotizacion
export const SelectedCotizacionAction = (id) => async(dispatch, getState) => {
    const { core } = getState();
    if( id == "" ){
        dispatch({
            type: SELECTE_NONE_COTIZACION,
            payload: { ...core, responsableMessageError: "Ninguno seleccionado" }
        })
    }
    if (id != ""){
    dispatch({
        type: SELECTED_COTIZACION_CORE,
        payload: { ...core, SelectCotizacion: id, responsableMessageError: "" }
    })
    }
};


export const ChangeFileDerechaAction = () => async(dispatch, getState) => {
    const { core } = getState();
    dispatch({
        type: CHANGE_PDF_DER_STORE,
        payload: { ...core, FilePdf: Ficha}
    })
};

export const ChangeFileIzquierdaAction = () => async(dispatch, getState) => {
    const { core } = getState();
    dispatch({
        type: CHANGE_PDF_IZQ_STORE,
        payload: { ...core, FilePdf: Cotizacion}
    })
};

//Valor Guardar cotizacion
export const setValorValidatedAction = (valorCot) => async(dispatch, getState) => {
    const { core } = getState();
    valorCot
    ? dispatch({
        type: SET_RESPONSABLEVALOR_SUCCESS,
        payload: {
          ...core,
          valorCot: valorCot,
          responsableMessageError: "",
        },
      })
    : dispatch({
        type: SET_RESPONSABLEMESSAGE_VALOR_ERROR,
        payload: {
          ...core,
          valorCot: "",
          responsableMessageError: "INGRESE UN VALOR",
        },
      });
}


//Guardar informacion adicional
export const setInfoAditionalAction = (info) => async(dispatch, getState) => {
    const { core } = getState();
    info
    ? dispatch({
        type: SET_RESPONSABLEINFO_SUCCESS,
        payload: {
          ...core,
          info,
          responsableMessageError: "",
        },
      })
    : dispatch({
        type: SET_RESPONSABLEMESSAGE_INFO_ERROR,
        payload: {
          ...core,
          info: "",
          responsableMessageError: "INFORMACION VACIA",
        },
      });
}


//Limpiar estado de errores
export const clearResponsableMessageErrorAction =
    () => async (dispatch, getState) => {
        const { core } = getState();
        dispatch({
            type: CLEAR_MESSAGE_ERROR,
            payload: { ...core, responsableMessageError: "" },
        });
    };

