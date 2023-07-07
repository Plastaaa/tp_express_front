import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Voir from "./pages/Voir";
import Editer from "./pages/Editer"
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import Ajouter from "./pages/Ajouter";

export default function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>FrontEnd JS</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="voir" element={<Voir />} />
          <Route path="editer" element={<Editer/>}/>
          <Route path="ajouter" element={<Ajouter/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));