import { LabelInput, Input} from "../styles/Components";

const LabelDataRuc = ({ providerName }) => {
    return(
        <>
          <LabelInput htmlFor="CorreoProveedor">RAZÓN SOCIAL</LabelInput>
          <Input 
          type="text"
          disabled
          value={providerName} 
          />
         </>
    );
}

export default LabelDataRuc;