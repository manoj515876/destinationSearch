import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-card">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={this.onSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="img-icon"
          />
        </div>
        <ul className="list-container">
          {searchResults.map(each => (
            <DestinationItem itemDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
