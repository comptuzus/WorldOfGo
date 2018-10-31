import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/playground/images.scss";
import image1 from "../../public/ressources/carpentras.jpg"
import image2 from "../../public/ressources/italian_truly.jpeg"

const FirstImage = () => (
  <div>
    <h1>This is super overlapping project</h1>
    <p><strong>Voici la grande image</strong></p>
    <img src={image1} alt="Superbe image" className="bigPicture"></img>
  </div>
);

const SecondImage = () => (
  <div>
    <img src={image2} alt="image n°2" className="overlapImage"></img>
  </div>
)

const App = () => (
  <div>
    <FirstImage></FirstImage>
    <SecondImage></SecondImage>
  </div>
)


ReactDOM.render(<App />, document.getElementById("root"));