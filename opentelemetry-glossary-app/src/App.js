import React, { useState } from 'react';
import glossaryData from './glossaryData';
import './App.css';

const App = () => {
  const [selectedTerm, setSelectedTerm] = useState({ term: '', definition: '' });

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * glossaryData.length);
    setSelectedTerm(glossaryData[randomIndex]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>OpenTelemetry Glossary</h1>
        {selectedTerm.term && (
          <div className="term-container">
            <h3>{selectedTerm.term}</h3>
            <p>{selectedTerm.definition}</p>
          </div>
        )}
        <button onClick={handleButtonClick}>Show Random Term</button>
      </header>
    </div>
  );
};

export default App;
