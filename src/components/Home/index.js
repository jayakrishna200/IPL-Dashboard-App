// Write your code here
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import {Component} from 'react'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const formattedData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsList: formattedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="home-container">
        <div className="home-dashboard-continer">
          <div className="heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <div data-testid="loader" className="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="teams-list-container">
              {teamsList.map(eachItem => (
                <TeamCard teamCard={eachItem} key={eachItem.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
