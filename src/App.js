import "./App.css";
import "./styles/global.css"
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScreenHome from "./screens/ScreenHome/ScreenHome";
import ScreenError from "./screens/ScreenError";
import ScreenLogement from "./screens/ScreenLogement/ScreenLogement";
import ScreenPropos from "./screens/ScreenPropos/ScreenPropos";
import Layout from "./layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <div>
          <Routes>
            <Route path="/" element={<ScreenHome />} />
            <Route path="/logement/:id" element={<ScreenLogement />} />
            <Route path="/propos" element={<ScreenPropos />} />
            <Route path="*" element={<ScreenError />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
