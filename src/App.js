import React from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import { originals_api,action_api } from './url'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost title='Netflix Originals' url={originals_api}/>
        <RowPost title='Action' isSmall url={action_api}/>
    </div>
  );
}

export default App;