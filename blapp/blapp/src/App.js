import React from 'react';
import './App.css';
import Login from "./Components/login/login";


const App = () => {
  return (
    <div>
      <Login></Login>
    </div>
  );
}


/*

import Card from "./Components/Card/Card";
import Parasite from "./Components/Card/images/Parasite.jpg";
import OnceUpon from "./Components/Card/images/once_upon.jpg";
import Irishman from "./Components/Card/images/irishman.jpeg";

/*
const Images = [
  {
    img: Parasite,
    title: "Parasite",
    director: "Boon Joon-Ho"
  },
  {
    img: OnceUpon,
    title: "Once upon a time in Hollywood",
    director: "Quentin Tarantino"
  },
  {
    img: Irishman,
    title: "The Irishman",
    director: "Martin Scorsese"
  }
]

const App = () => {

 return (
    <div className="card-container"> 
      {Images.map(img => {
        return (<Card key={img.title} backgroundimg = {img.img} title = {img.title} director = {img.director}/>) 
      })}                                
   </div >
  );                                        Con key
}


 return (
    <div className="card-container"> 
      {Images.map(img => {
        return (<Card backgroundimg = {img.img} title = {img.title} director = {img.director}/>) 
      })}                                
   </div >                                Sin key
  );


  <div>
      {Images.map(img => {
        if (img.title === "Parasite") {
          return (<Card backgroundimg={img.img} title={img.title} director={img.director} />)
        }
      })}                               Mapear por titulo
    </div>
  )

      <div className="card-container">
      {Images.map((img, index) => { //index 
  //      if (card.cardSubTitle === "El lugar de la Felicidad") { //mapeo por subtitulo!//
        if(index % 2== 0) { //el resto se muestra con % este signo. cuando le pongo resto 0 me va a mostrar dos imagenes porque lo toma por posicion no por numero
          //mapear por card si es mayor a 1 que me tire x carta
          return (<Card key={`Card-${index}`}
            backgroundimg = {img.img}
            title = {img.title}
            director = {img.director}></Card>);
        }
      })}
    <div className="card-container">

      {Images.map(img => {
        return (<Card key={img.title} backgroundimg={img.img} title={img.title} director={img.director} />)
      })}
    </div >

      */


export default App;
