import { Link } from "react-router-dom";

import dog from "../assets/dog.png";
import cat from "../assets/cat.png";
import "../components/Home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="title">Welcome to Dogs and Cats World</h1>

      <div className="card-container">
        <Link to="/dogs" className="card">
          <img src={dog} alt="Dog" />
          <p>Doggies</p>
        </Link>

        <Link to="/cats" className="card">
          <img src={cat} alt="Cat" />
          <p>Catiess</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
