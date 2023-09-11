import { useQuery } from "@apollo/client";
import { GET_GAMES } from "../gql/Index";
import { Card, Loader, Message } from "../components/Index";

const Home = () => {
  const { loading, error, data } = useQuery(GET_GAMES);

  if (loading) return <Loader />;

  if (error) return <Message message={error.message} />;

  return (
    <div className='container'>
      <h1>List of games</h1>
      <div className='games'>
        {data?.games?.map((game) => (
          <Card game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
