import React, {Component} from 'react';

export default class FollowersCard extends Component {
  render() {
    return (
      <div className='mainContainer'>
        <div className='imageContainer'>
          <img className='image' src={this.props.user.avatar_url} alt={this.props.user.name} />
        </div>
        <div className='infoContainer'>
          <h2>Name: {this.props.user.name}</h2>
          <h4>Username: {this.props.user.login}</h4>
          <h5>Followers: {this.props.user.followers}</h5>
          <h5>Following: {this.props.user.following}</h5>
          <h5>Bio: {this.props.user.bio}</h5>
        </div>
      </div>
    )
  }
}
