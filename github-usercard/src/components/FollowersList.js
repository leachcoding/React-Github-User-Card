import React, {Component} from 'react';
import FollowersCard from './FollowersCard';

export default class FollowersList extends Component {
  render() {
    return (
      <>
        {this.props.followerData.map((user, index) => {
          return <FollowerCard key={user.id} index={index} userData={user} />
        })}
      </>
    )
  }
}
