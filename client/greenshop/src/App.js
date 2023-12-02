import "antd/dist/antd";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Landingmodule from "./Component/Modules/Landingmodule";
import {Routes,Route} from "react-router-dom"
function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<Landingmodule />}/>
    </Routes>
    

    </>
  )
}

export default App;
