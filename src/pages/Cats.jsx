import React from "react";
import cat1 from "../assets/cat1.png";
import cat2 from "../assets/cat2.png";
import cat3 from "../assets/cat3.png";
import cat4 from "../assets/cat4.png";
import cat5 from "../assets/cat5.png";
import "../components/Dogs.css"; // Make sure your CSS is linked here

const dogs = [
  { 
    img: cat1, 
    name: "Fishing cat", 
    desc: "I am Hungry, so I am Phishing" 
  },
  { 
    img: cat2, 
    name: "Lion King", 
    desc: "Dude, I am the King " 
  },
  { 
    img: cat3, 
    name: "Persian Tommy Shelby", 
    desc: "It's not a good idea to look at Tommy Shelby the wrong way" 
  },
  { 
    img: cat4, 
    name: "Rag Doll", 
    desc: "I am an innocent Dolly-Doll" 
  },
  { 
    img: cat5, 
    name: "Dori-The-Mon", 
    desc: "I know I am Pretty, I have some cool Gadgets too" 
  },
];

const Dogs = () => {
  return (
    <div className="dogs-page">
      <h1 className="dogs-title">Cool Cats Gallery</h1>
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
