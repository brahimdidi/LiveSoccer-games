/*eslint-disable */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IoIosArrowDropdown } from 'react-icons/io';
import { selectAllGames, fetchAllGames } from '../reduxFeatures/allGamesSlice';
import './Css/Competition.css';

function Competition() {
  // select all games from the main state.
  const allGames = useSelector(selectAllGames);
  const dispatch = useDispatch();
  // check if the state is empty , fetch data only once
  useEffect(() => {
    if (!allGames.length)dispatch(fetchAllGames());
  }, [dispatch]);
  // set the name fo the league clicked through useLocation object
  const location = useLocation();
  if (location.state) {
    var { league } = location.state;
    var showCompetition = allGames.filter((e) => e.competition === league);
  }
  // here we filter the most popular competitions to show.
  const friendlies = allGames.filter((e) => e.competition === 'INTERNATIONAL: Club Friendlies');
  const nationsLeague = allGames.filter((e) => e.competition === 'UEFA NATIONS LEAGUE A: Group Stage');
  const premierLeague = allGames.filter((e) => e.competition === 'ENGLAND: Premier League');
  const laLiga = allGames.filter((e) => e.competition === 'SPAIN: La Liga');
  const serieA = allGames.filter((e) => e.competition === 'ITALY: Serie A');
  const afcCup = allGames.filter((e) => e.competition === 'AFC CUP: Group Stage');
  // this function returns the jsx needed to render the UI
  const itemJsx = (league) => (
    <li key={league.id}>
      <h2 className="date text-center">{league.date}</h2>
      <div className="title-time">
        <h3>{league.title}</h3>
        <span>{league.time}</span>
      </div>

    </li>
  );

  const leagueEmpty = (e) => (
    <li key={34} className="league-empty">
      There is no
      {' '}
      {e}
      {' '}
      games
      yet!
    </li>
  );
  // useState to toggle the show more button
  const [showNationsLeague, setNationsLeague] = useState(false);
  const [showFriendlies, setFriendlies] = useState(false);
  const [showLaLiga, setLaLiga] = useState(false);
  const [showSerieA, setSerieA] = useState(false);
  const [showPremierLeague, setPremierLeague] = useState(false);
  const [showAfcCup, setAfcCup] = useState(false);
  //  render the UI : if the location object is null  render the leagues filter
  // form the state, else we only render the league which the user chose to see
  return (
    <>
      {!location.state
     && (
     <section className="Competitions-container">
       <div className="competition-container">
         <div className="league-name">
           <h1>Nations league (lastest games)</h1>
           <IoIosArrowDropdown onClick={() => setNationsLeague(!showNationsLeague)} />
         </div>
         <ul className={`competition-list ${showNationsLeague ? 'flex' : 'display-none'}`}>
           {nationsLeague.length ? ((nationsLeague.map((league) => (itemJsx(league))))) : leagueEmpty('Premier League') }
         </ul>
       </div>
       <div className="competition-container">
         <div className="league-name">
           <h1 className="league-name">La liga (lastest games)</h1>
           <IoIosArrowDropdown onClick={() => setLaLiga(!showLaLiga)} />
         </div>
         <ul className={`competition-list ${showLaLiga ? 'flex' : 'display-none'}`}>
           {laLiga.length ? ((laLiga.map((league) => (itemJsx(league))))) : leagueEmpty('La liga') }
         </ul>
       </div>
       <div className="competition-container">
         <div className="league-name">
           <h1 className="league-name">Serie A (lastest games)</h1>
           <IoIosArrowDropdown onClick={() => setSerieA(!showSerieA)} />
         </div>

         <ul className={`competition-list ${showSerieA ? 'flex' : 'display-none'}`}>

           {serieA.length ? ((serieA.map((league) => (itemJsx(league))))) : leagueEmpty('Serie A') }
         </ul>
       </div>
       <div className="competition-container">
         <div className="league-name">
           <h1>Premier League (lastest games)</h1>
           <IoIosArrowDropdown onClick={() => setPremierLeague(!showPremierLeague)} />
         </div>
         <ul className={`competition-list ${showPremierLeague ? 'flex' : 'display-none'}`}>

           {premierLeague.length ? ((premierLeague.map((league) => (itemJsx(league))))) : leagueEmpty('Nations League') }
         </ul>
       </div>
       <div className="competition-container">
         <div className="league-name">
           <h1>Club Friendlies (lastest games)</h1>
           <IoIosArrowDropdown onClick={() => setFriendlies(!showFriendlies)} />
         </div>
         <ul className={`competition-list ${showFriendlies ? 'flex' : 'display-none'}`}>

           {friendlies.length ? ((friendlies.map((league) => (itemJsx(league))))) : leagueEmpty('Friendlies ') }
         </ul>
       </div>
       <div className="competition-container">
         <div className="league-name">
           <h1>AFC CUP (lastest games)</h1>
           <IoIosArrowDropdown onClick={() => setAfcCup(!showAfcCup)} />
         </div>
         <ul className={`competition-list ${showAfcCup ? 'flex' : 'display-none'}`}>

           {afcCup.length ? ((afcCup.map((league) => (itemJsx(league))))) : leagueEmpty('AFC CUP ') }
         </ul>
       </div>
     </section>
     )}
      {location.state && (
      <section className="Competitions-container">
        <div className="competition-container competition-show">
          <div className="league-name">
            <h1>
              {league}
              {' '}
              (lastest games)
            </h1>
          </div>
          <ul className="competition-show-list flex">
            {showCompetition.length
              ? ((showCompetition.map((league) => (itemJsx(league)))))
              : leagueEmpty(showCompetition.competition) }
          </ul>
        </div>
      </section>
      )}
      {!allGames.length && <h1 className="text-danger">Check your internet Again</h1>}

    </>
  );
}

export default Competition;
