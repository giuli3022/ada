import React from 'react';
import './App.css';
import Hero from "./Sections/Hero/Hero";
import Types from "./Sections/Types/Types"; 
import OurStory from './Sections/OurStory/OurStory';
import FreshBeans from './Sections/FreshBeans/FreshBeans';

function App() {
  return (
    <div>
      <Hero></Hero>
      <Types></Types>
      <OurStory></OurStory>
      <FreshBeans></FreshBeans>
    </div>
  );
}

export default App;
