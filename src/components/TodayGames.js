/*eslint-disable */
import React from 'react';
import { MdReadMore } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const TodayGames = (props) => {
  const { list } = props;
  // functionality to get the date same format as the api date
  const currentJsDateObj = new Date();
  const month = currentJsDateObj.getMonth() + 1;
  const currentJsDateString = currentJsDateObj.toString();
  const day = currentJsDateString.slice(8, 10);
  const year = currentJsDateString.slice(11, 15);
  const currentDate = `${year}-0${month}-${day}`;
  const todayGamesList = list.filter((e) => e.date === currentDate);

  return (
    <>
      {todayGamesList.map((game) => (
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
          <div className="title-time bg-info">
            <h3>{game.title}</h3>
            <span>{game.time}</span>
          </div>

        </li>
      ))}
    </>
  );
};

export default TodayGames;
