// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatch
  return (
    <div className="latest-match-container">
      <div className="competing-team-container">
        <div className="team-details-container">
          <p className="competing-team">{competingTeam} </p>
          <p className="date">{date} </p>
          <p className="venue">{venue} </p>
          <p className="result">{result} </p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            alt={` latest match ${competingTeam}`}
            className="competing-team-image"
          />
        </div>
      </div>
      <hr />
      <div className="team-result-container">
        <p className="innings">First Innings</p>
        <p> {firstInnings} </p>
        <p className="innings">Second Innings</p>
        <p>{secondInnings} </p>
        <p className="innings">Man Of The Match</p>
        <p>{manOfTheMatch} </p>
        <p className="innings">Umpires</p>
        <p>{umpires} </p>
      </div>
    </div>
  )
}

export default LatestMatch
