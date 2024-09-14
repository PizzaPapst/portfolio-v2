import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Work from "./pages/Work";
import Bachelorarbeit from "./pages/Bachelorarbeit"
import DesignSystem from "./pages/DesignSystem";

function App() {
  return (
   <BrowserRouter>
    <Routes>
        <Route element={<Layout/>}>
            <Route path="/" element={<Work />}/>
            <Route path="/about" element={<About />} />
            <Route path="/bachelorarbeit" element={<Bachelorarbeit />} />
            <Route path="/designsystem" element={<DesignSystem/>}/>
        </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App;
