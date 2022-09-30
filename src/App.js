import React from 'react';
import './App.scss';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import Content from './components/Content';

function App() {
  return (
    <React.Fragment>
      <TopBar />
      <div className='flexcontent'>
        <SideBar />
        <Content />
      </div>
    </React.Fragment>
  );
}

export default App;
