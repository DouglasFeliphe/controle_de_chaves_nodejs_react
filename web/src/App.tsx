import React, { useContext } from 'react';
import Menu from './components/Menu';
import AuthContext from './providers/AuthContext';
import './App.css';
import { sign } from 'crypto';


const App: React.FC = () => {

  const { admin } = useContext(AuthContext)

  console.log(admin);
  return (
    <>
      <Menu></Menu>
      <div>
        <h1>ola mundo!</h1>
      </div>
    </>
  );
}

export default App;
