import React from "react";
import dog1 from "../assets/dog1.png";
import dog2 from "../assets/dog2.png";
import dog3 from "../assets/dog3.png";
import dog4 from "../assets/dog4.png";
import dog5 from "../assets/dog5.png";
import "../components/Dogs.css"; // Make sure your CSS is linked here

const dogs = [
  { 
    img: dog1, 
    name: "Serious German Shepherd", 
    desc: "I am dayumm serious unpaid worker" 
  },
  { 
    img: dog2, 
    name: "Cool Golden Retriever", 
    desc: "I am so chilly-chill " 
  },
  { 
    img: dog3, 
    name: "Rosy Husky", 
    desc: "You need some roses, darlo?" 
  },
  { 
    img: dog4, 
    name: "Cute Poddle", 
    desc: "Ok, I already know , I am a cutiee" 
  },
  { 
    img: dog5, 
    name: "Scooby-Dooby", 
    desc: "Scooby-Dooby-Pa-Pa-SE-boom-boom-boom" 
  },
];

const Dogs = () => {
  return (
    <div className="dogs-page">
      <h1 className="dogs-title">Cool Dogs Gallery</h1>
      <div className="dogs-grid">
        {dogs.map((dog, index) => (
          <div key={index} className="dog-card">
            <div className="img-wrapper">
              <img src={dog.img} alt={dog.name} />
              <div className="hover-box">
                <p className="desc-text">{dog.desc}</p>
              </div>
            </div>
            <p className="dog-name">{dog.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dogs;
