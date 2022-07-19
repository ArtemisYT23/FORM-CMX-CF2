import { CoreInstance, FileInstance, DocumentInstance } from "../../config/axiosInstance";
import axios from "axios";

const initialState = {
    RequestData: [],
    Cotization: [],
    BoolenAproved: [],
    Num: 0,
    Codigo: "",
    elementError: "",
}

const GET_ALL_DATA_DOCUMENT_FILE = "GET_ALL_DATA_DOCUMENT_FILE";
const GET_ALL_DATA_DOCUMENT_ERRORS = "GET_ALL_DATA_DOCUMENT_ERRORS";
const GET_ALL_DATA_APROVED_FILE = "GET_ALL_DATA_APROVED_FILE";
const GET_ALL_DATA_APROVED_ERRORS = "GET_ALL_DATA_APROVED_ERRORS";
const GET_ALL_FILES_DOCUMENTS = "GET_ALL_FILES_DOCUMENTS";
const GET_ALL_FILES_ERRORS_DOCUMENTS = "GET_ALL_FILES_ERRORS_DOCUMENTS";
const GET_ALL_FILES = "GET_ALL_FILES";
const CHANGE_COTIZATION_DATOS = "CHANGE_COTIZATION_DATOS";
const CHANGE_DOCUMENT_CODE = "CHANGE_DOCUMENT_CODE";

export default function DataReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DATA_DOCUMENT_FILE:
        case GET_ALL_DATA_DOCUMENT_ERRORS:
        case GET_ALL_DATA_APROVED_FILE:
        case GET_ALL_DATA_APROVED_ERRORS:
        case GET_ALL_FILES_DOCUMENTS:
        case GET_ALL_FILES_ERRORS_DOCUMENTS:
        case GET_ALL_FILES:
        case CHANGE_COTIZATION_DATOS:
        case CHANGE_DOCUMENT_CODE:
            return action.payload;
        default:
            return state;
    }
};

//guardar dato del parametro de documento
export const getAllDocumentCode = (doc) => async (dispatch, getState) => {
    const { datos } = getState();
    dispatch({
        type: CHANGE_DOCUMENT_CODE,
        payload: { ...datos, Codigo: doc }
    })
}


//Traer todos los datos de form 1
export const getAllDataDocument = (doc) => async (dispatch, getState) => {
    const { datos } = getState();
    try {
        const response = await axios({
            url: `${DocumentInstance}Document/${doc}`,
        });
        dispatch({
            type: GET_ALL_DATA_DOCUMENT_FILE,
            payload: { ...datos, RequestData: response.data },
        })
        if(response.status == 200){
            dispatch(getAllDocumentFile(doc));
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_DATA_DOCUMENT_ERRORS,
            payload: { ...datos, RequestData: [], elementError: error },
        })
    }
};

//Cambiar de Cotizacion
export const CambioCotizacion = (Nume) => async (dispatch, getState) => {
    const { datos } = getState();
    dispatch({
        type: CHANGE_COTIZATION_DATOS,
        payload: { ...datos, Num: Nume }
    })
};


/*Traer todos los archivos de cotizaciones */
export const getAllDocumentFile = (doc) => async (dispatch, getState) => {
    const { datos } = getState();
    try {
        const response = await axios({
            url: `${FileInstance}File/getinfofiles/${doc}`,
        });
        dispatch({
            type: GET_ALL_FILES_DOCUMENTS,
            payload: { ...datos, Cotization: response.data },
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_FILES_ERRORS_DOCUMENTS,
            payload: { ...datos, Cotization: [], elementError: error },
        })
    }

}



/*Guardar form */
export const CreateFormNew = (FormEnvio, doc) =>
    (dispatch, getState) => {
        const { datos } = getState();
        console.log(FormEnvio);
        axios({
            url: `${DocumentInstance}Document/${doc}`,
            method: "POST",
            data: FormEnvio,
            headers: {
                "Content-Type": "application/json-patch+json",
            },
        })
            .then(function (response) {
                console.log(response)
            }).catch(function (error) {
                console.log(error);
            })
    };