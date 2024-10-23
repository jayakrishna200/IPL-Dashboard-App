// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails, isGameWon} = props
  const {
    competingTeam,
    result,
    competingTeamLogo,
    matchStatus,
  } = matchCardDetails
  const gameStatusClassName = isGameWon ? 'game-won' : 'game-lost'

  return (
    <li className="match-card-item">
      <div>
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="competing-team-logo-match"
        />
      </div>

      <p className="match-team">{competingTeam} </p>
      <p className="match-result">{result} </p>
      <p className={`match-status ${gameStatusClassName}`}>{matchStatus} </p>
    </li>
  )
}
export default MatchCard
