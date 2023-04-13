import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from 'axios'

import "./Card.css";


function Card({ imageSource, title, text, url }) {
  const [lista, setLista] = useState([])

//  para que cargue por defecto en la pagina
  useEffect(() => {
    axios.get('')
        .then((res) => {
            console.log(res)
            setLista(res.data)
        }).catch((err) => {
            console.log(err)
        })
}, [])


  return (
    <div className="card text-center bg-white animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
         Ver mas 
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;