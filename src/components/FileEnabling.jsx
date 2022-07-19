import { useState } from "react";
import FileHeaderContainer from "../styles/Cotization/FileEnabling";
import {
  ActionFile,
  TypeFileContainer,
  FileContainer,
} from "../styles/Cotization/File";
import { LabelInput, Selected, Input } from "../styles/Cotization/InputRequirement";
import addIcon from "../../assets/icons/Crear.svg";
import removeIcon from "../../assets/icons/Eliminar.svg";
import { useDispatch } from "react-redux";
import { ennablingsType } from "../types/ennablingsType";

const FileEnabling = () => {
  const dispatch = useDispatch();

  const [numberOfFiles, setNumberOfFiles] = useState([]);
  const [enablingClick, setEnablingClick] = useState(false);

  const setFile = (e) => {
    let name = e.target.id;
    let file = e.target.files[0];
    // dispatch(addEnablingFileAction(name, file));
  };

  const removeFile = (index) => {
    let name = numberOfFiles[index];
    // dispatch(removeEnablingFileAction(name));
  };

  const addNumberOfFiles = (e) => {
    e.stopPropagation();
    const files = [...numberOfFiles];
    files.push("");
    setNumberOfFiles(files);
    setEnablingClick(true);
  };

  const removeNumberOfFiles = (index) => {
    const files = [...numberOfFiles];
    files.splice(index, 1);
    setNumberOfFiles(files);
  };

  const typeFileSelected = (value, index) => {
    const files = [...numberOfFiles];
    files[index] = value;
    setNumberOfFiles(files);
  };

  return (
    <TypeFileContainer>
      <FileHeaderContainer
        onClick={(e) => {
          e.stopPropagation();
          setEnablingClick(!enablingClick);
        }}
        backgroundColor={
          numberOfFiles.length !== 0 && enablingClick ? "primaryColor" : "white"
        }
      >
        ADJUNTAR ARCHIVOS
        <ActionFile onClick={(e) => addNumberOfFiles(e)}>
          <img width="100%" src={addIcon} alt="addIcon"></img>
        </ActionFile>
      </FileHeaderContainer>
      {enablingClick ? (
        numberOfFiles.map((item, index) => (
          <FileContainer key={index}>
            <LabelInput
              htmlFor={item}
              width="100%"
              height="100%"
              textAlign="center"
            >
              {item ? ennablingsType[item] : "Seleccione"}
            </LabelInput>
            <Input
              id={item}
              type="file"
              display="none"
              onInput={(e) => setFile(e)}
            />
            {!item ? (
              <Selected
                marginTop="0"
                onChange={(e) => typeFileSelected(e.target.value, index)}
              >
                <option value="" hidden>
                  Tipo de documentos...
                </option>
                {Object.keys(ennablingsType).map((key, i) => (
                  <option key={i} value={key}>
                    {ennablingsType[key]}
                  </option>
                ))}
              </Selected>
            ) : (
              <></>
            )}

            <ActionFile
              onClick={() => {
                removeNumberOfFiles(index);
                removeFile(index);
              }}
            >
              <img width="100%" src={removeIcon} alt="removeIcon"></img>
            </ActionFile>
          </FileContainer>
        ))
      ) : (
        <></>
      )}
    </TypeFileContainer>
  );
};

export default FileEnabling;
