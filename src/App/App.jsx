import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, ErrorPage, GamePage, TablePage } from '../Pages';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Spinner from '../Components/Spinner/Spinner';
import wordsJson from '../data/words.json';

import '../style/App.scss'

function App() {
  const [words, setWords] = useState( () => wordsJson || false);
  /*const stateWords = { words, setWords };*/

  if(!words){
    return <Spinner />
  }
  
  return (
    <Router>
    <div className='container'>
     <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/game" element={<GamePage words={words} setWords={setWords} />}/>
          <Route path="/table" element={<TablePage words={words} setWords={setWords} />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
     <Footer />
    </div>
    </Router>
  )
}

export default App
