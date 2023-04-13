import React from "react";
import Card from "./Card";



const cards = [
  {
    id: 1,
    title: "titulo 1",
  
  },
  {
    id: 2,
    title: "titulo 2",
   
  },
  {
    id: 3,
    title: "TITULO 3",
   
  
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;