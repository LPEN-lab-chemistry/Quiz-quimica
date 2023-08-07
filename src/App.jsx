import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Quests from './pages/Quests';
import QuestEazy from './pages/QuestEazy';

function App() {
  return (
    <div>
      <BrowserRouter basename="/quiz-quimica">
        <Routes>
          {/* <Route element={<Home />} path="/" /> */} {/* não feito */}
          <Route element={<Login />} path="/conta" /> {/* Giu */}
          {/* <Route element={<About />} path="/sobre" /> */} {/* não feito */}
          <Route element={<Quests />} path="/outras-perguntas" /> {/* Hudson */}
          <Route element={<QuestEazy />} path="/pergunta-facil" /> {/* Hudson */}
          {/* <Route element={<Quest-medium />} path="/pergunta-media" /> */} {/* não feito */}
          {/* <Route element={<Quest-hard />} path="/pergunta-dificil" /> */} {/* não feito */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App