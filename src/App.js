import React from 'react'
import './App.css';
import Signup from './components/signup'
import {AuthProvider} from './context/AuthProvider'
function App() {
  return (
    <AuthProvider>    <div className="App">
     
    <Signup/>
    </div>
    </AuthProvider>

  );
}

export default App;
