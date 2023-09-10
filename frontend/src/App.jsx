import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get data
  const getData = async () => {
    setLoading(true);
    const res = await axios.get("http://localhost:4000");
    setLoading(false);
    setGames(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1>List of games</h1>
      {games.length === 0 && !loading && <span className='loader'></span>}
      <div className='games'>
        {games.map((game) => (
          <Card game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
