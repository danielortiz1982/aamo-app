import React from 'react';
import './App.sass';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent'
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App;
