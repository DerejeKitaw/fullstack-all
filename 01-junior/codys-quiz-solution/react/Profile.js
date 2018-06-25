import React from 'react';

export default class Profile extends React.Component {
  render () {
    const { profile } = this.props;
    return (

      <div>
        <h1>Profile for {profile.name}</h1>
        <p>Age: {profile.age}</p>
        <div className="desc">{profile.description}</div>
      </div>

    );

  }

}

