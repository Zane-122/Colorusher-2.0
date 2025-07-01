import React from 'react';
import logo from './logo.svg';
import BasicButton from './components/buttons/Basic-button';
import BasicTitle from './components/text/Basic-title';
import Sidebar from './components/Sidebar';
import FinePrint from './components/text/Fine-print';
function App() {
  return (

    <div style={{backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '80vh', paddingTop: '60px' }}>
      <Sidebar />
      <BasicTitle color="rgb(0, 0, 0)">COLORUSHER</BasicTitle>
      <p></p>
      <BasicButton label="PLAY" color="rgb(255, 231, 231)" textColor="black" size="large" onClick={() => alert('Button clicked')} />
      <BasicButton label="Stats" color="rgb(231, 246, 255)" textColor="black" size="medium" onClick={() => alert('Button clicked')} />
      <BasicButton label="Settings" color="rgb(255, 226, 247)" textColor="black" size="medium" onClick={() => alert('Button clicked')} />
    </div>
  );
}

export default App;
