import Parasite from "../../Components/Card/images/Parasite.jpg";
import OnceUpon from "../../Components/Card/images/once_upon.jpg";
import Irishman from "../../Components/Card/images/irishman.jpeg";


const CardsContainer = [
  {
    id: "Parasite",
    img: Parasite,
    title: "Parasite",
    director: "Boon Joon-Ho"
  },
  {
    id: "Once-upon-a-time-in-Hollywood",
    img: OnceUpon,
    title: "Once upon a time in Hollywood",
    director: "Quentin Tarantino"
  },
  {
    id: "The-Irishman",
    img: Irishman,
    title: "The Irishman",
    director: "Martin Scorsese"
  }
]


export default CardsContainer;
/*

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