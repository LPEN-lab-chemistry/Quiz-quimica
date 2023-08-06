import './App.css';
import Login from './pages/Login';
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/conta" />
          <Route element={<About />} path="/sobre" />
          <Route element={<Quests />} path="/outras-perguntas" />
          <Route element={<Quest-eazy />} path="/pergunta-facil" />
          <Route element={<Quest-medium />} path="/pergunta-media" />
          <Route element={<Quest-hard />} path="/pergunta-dificil" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App