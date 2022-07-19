import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cotizaciones from "./views/Cotizaciones"
import { useEffect } from "react"
import { getAllDocumentCode, getAllDataDocument } from "./store/DataNew";
import Success from "./views/Success";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  // const Doc = 1201;

  // const fecha = "http://108.161.128.141:9094/?1200"
  // console.log(fecha.length); 

  //http://108.161.128.141:9094/?340
  //http://centralfile-sisadcloud.com:9094/?340
  //http://localhost:3000/?1208
  

  const dispatch = useDispatch();
  const { datos } = useSelector((store) => store);
  const { RequestData, Cotization } = datos;

  const URI = document.URL
  // console.log(URI);

  const doc = URI.slice(40)
  // const doc = URI.slice(29)
  // const doc = URI.slice(23)
//   console.log(doc);
//   console.log(RequestData);
// console.log(Cotization);

  // const Document = `/?Doc=${doc}`

  useEffect(() => {
    dispatch(getAllDocumentCode(doc));
    dispatch(getAllDataDocument(doc));
  },[])

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Cotizaciones />} /> */}
        <Route path= '/' element={<Cotizaciones />} />
        <Route path= '/Success' element={<Success />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
