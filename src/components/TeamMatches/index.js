// Write your code here
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const recentMatches = data.recent_matches
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    console.log(recentMatches)
    const formattedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const formattedRecentMatches = recentMatches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))
    console.log(formattedRecentMatches)

    this.setState({
      teamBannerUrl,
      latestMatchDetails: formattedLatestMatchDetails,
      recentMatches: formattedRecentMatches,
      isLoading: false,
    })
  }

  renderTeamMatches = () => {
    const {teamBannerUrl, latestMatchDetails, recentMatches} = this.state
    return (
      <div>
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-img"
        />
        <p className="latest-matches">Latest Matches</p>
        <LatestMatch latestMatch={latestMatchDetails} />
        <ul className="recent-matches-container">
          {recentMatches.map(eachItem => (
            <MatchCard
              matchCardDetails={eachItem}
              key={eachItem.id}
              isGameWon={eachItem.matchStatus === 'Won'}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {id, isLoading} = this.state
    return (
      <div className="team-matches-main-bg" id={`${id}`}>
        {isLoading ? (
          <div data-testid="loader" className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
