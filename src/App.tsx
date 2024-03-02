import FormSuccess from "./pages/formSuccess";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formsuccess" element={<FormSuccess />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
