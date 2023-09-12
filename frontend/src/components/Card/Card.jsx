import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ game }) => {
  console.log(game.id);
    return (
    <Link to={`/${game.id}`} className='card'>
      <div className='game'>
        <h2>{game.title}</h2>
        <img src={game.image} alt={game.title} />
      </div>
    </Link>
  );
};

// PropTypes
export default Card;
