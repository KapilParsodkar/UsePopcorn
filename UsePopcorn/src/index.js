import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App2 from "./TextExpander";
import Appv1 from "./Appv1";
import Starrating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <Starrating color="blue" MaxRating={10} onsetrating={setMovieRating} />
      <p>this movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Appv1 />
    {/* <Starrating messages={["terrible", "bad", "Okay", "good", "very good"]} />
    <Starrating
      messages={["terrible", "bad", "Okay", "good", "very good"]}
      MaxRating={5}
    />
    <Starrating
      messages={["terrible", "bad", "Okay", "good", "very good"]}
      MaxRating={15}
      size={42}
      color="red"
      className="test"
      defaultRating={3}
    /> */}
    <Test />
    <App2 />
  </React.StrictMode>
);
