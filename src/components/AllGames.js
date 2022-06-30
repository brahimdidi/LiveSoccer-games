import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdReadMore } from 'react-icons/md';
import { fetchAllGames, selectAllGames } from '../reduxFeatures/allGamesSlice';
import TodayGames from './TodayGames';

function AllGames() {
  const allGamesList = useSelector(selectAllGames);
  // styles for the navbar elements
  const [todayGames, setTodayGames] = useState(false);
  const [allGames, setAllGames] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!allGamesList.length)dispatch(fetchAllGames());
  }, [dispatch]);
  const handleTodayGames = () => {
    setTodayGames(true);
    setAllGames(false);
  };
  const handleAllGames = () => {
    setTodayGames(false);
    setAllGames(true);
  };
  return (
    <div className="allGames-app">
      <nav className="allGames-nav">
        <button
          className={`btn ${allGames ? 'btn-active' : ''}`}
          type="button"
          onClick={handleAllGames}
        >
          All Games
        </button>
        <button
          className={`btn ${todayGames ? 'btn-active' : ''}`}
          type="button"
          onClick={handleTodayGames}
        >
          TodayGames
        </button>
      </nav>
      <ul className="games-container">
        {!todayGames && allGamesList.map((game) => (
          <li key={game.id}>
            <div className="competition">
              <h1>
                {game.competition}
              </h1>
              <NavLink className="AllGames-to-Competition" to="/Competition" state={{ league: game.competition }}>
                <MdReadMore />
              </NavLink>
            </div>

            <h2 className="date">{game.date}</h2>
            <div className="title-time">
              <h3>{game.title}</h3>
              <span>{game.time}</span>
            </div>

          </li>

        ))}
        {todayGames && <TodayGames list={allGamesList} />}
        {!allGamesList.length && <h1 className="text-danger">Check your internet Again</h1>}
      </ul>
    </div>
  );
}

export default AllGames;
