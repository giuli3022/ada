import React from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressBook} from '@fortawesome/free-solid-svg-icons';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Links from './Sections/Links/Links';
import SwitchComponent from './Sections/SwitchComponents/SwitchComponents';



const App = () => {
  return (
    <BrowserRouter>
      <Links />
      <SwitchComponent/>
    </BrowserRouter>  
    );
}

export default App;