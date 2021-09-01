import React, { Component } from 'react';

class FollowersCard extends Component {
    render() {
        // console.log('FollowersCard.js this.props.follower', this.props.follower);
        return (
            <div className='card'>
                <img src={this.props.follower.avatar_url} alt='avatar'/>
                <h3 className='name'>User Name: {this.props.follower.login}</h3>
                <p ></p>
                
            </div>
        );
    }
}

export default FollowersCard;
