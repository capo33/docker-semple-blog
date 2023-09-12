import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

import { GET_GAME } from "../gql/Index";
import { Loader, Message } from "../components/Index";

import "./style.css";

const Singlegame = () => {
  const { gameId } = useParams();
  console.log(gameId);

  const { loading, error, data } = useQuery(GET_GAME, {
    variables: { gameId },
  });

  if (loading) return <Loader />;

  if (error) return <Message type='danger' content={error.message} />;

  return (
    <>
      <div className='container'>
      <div className='back'>
        <Link to='/'>Back</Link>
      </div>
        {/* back link */}
        <div className='card-'>
          {/* card left */}
          <div className='game-imgs'>
            <div className='img-display'>
              <div className='img-showcase'>
                <img src={data?.game?.image} alt='shoe image' />
              </div>
            </div>
          </div>
          {/* card right */}
          <div className='game-content'>
            <h2 className='game-title'>{data?.game?.title}</h2>

            <div className='game-detail'>
              <h2>about this item: </h2>
              <p>{data?.game?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singlegame;
