//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { Counter } from "./component/counter.jsx";

let segundo = 0;
let decena = 0;
let centena = 0;
let mill = 0;
let milll = 0;
let millll = 0;

let timer = setInterval(() => {
  console.log(segundo);
  if (segundo >= 10) {
    segundo = 0;
    decena++;
  }
  if (decena >= 10) {
    decena = 0;
    centena++;
  }
  if (centena >= 10) {
    centena = 0;
    mill++;
  }
  if (mill >= 10) {
    mill = 0;
    milll++;
  }
  if (milll >= 10) {
    milll = 0;
    millll++;
  }

  //render your react application
  ReactDOM.render(
    <Counter
      tiempo6={millll}
      tiempo5={milll}
      tiempo4={mill}
      tiempo3={centena}
      tiempo2={decena}
      tiempo1={segundo}
      parar={timer}
    />,
    document.querySelector("#app")
  );
  segundo++;
}, .00005);
