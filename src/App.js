import React from 'react';
import Main from './components/MainComponent'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from "./components/Error Boundaries/ErrorBoundaries.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <React.StrictMode>
        <ErrorBoundary>
          <Main/>
        </ErrorBoundary>
      </React.StrictMode>
      </BrowserRouter>
    </div>
  );
}

export default App;
