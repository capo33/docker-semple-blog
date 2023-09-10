/* eslint-disable react/prop-types */

const Card = ({ game }) => {
  return (
    <div className='game' key={game.id}>
      <h2>{game.title}</h2>
      <img src={game.image} alt={game.title} />
    </div>
  );
};

// PropTypes
export default Card;
