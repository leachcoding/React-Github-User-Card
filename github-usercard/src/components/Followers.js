import React, {Component} from 'react';
import FollowersCard from './FollowersCard';

export default class Followers extends Component {

  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    console.log('Why', this.props.getFollowers())
    this.props.getFollowers()
  }

  render() {
    return (
      <>
        <button className='followerBtn' onClick={this.toggleOpen}>{this.state.isOpen === false ? 'Show Followers' : 'Hide Followers'}</button>
        <div className='followers'>
          {this.props.followers && this.state.isOpen === true && this.props.followers.map((val, index) => {
            return (
              <a href={val.html_url} target="_blank" rel="" key={val.id}>
                <div className='followerCard'>
                  <FollowersCard key={val.id} index={index} user={val}/>
                </div>
              </a>
            )
          })}
        </div>
      </>
    )
  }
}
