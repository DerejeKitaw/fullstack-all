import React from 'react';

export default class FavoriteFoods extends React.Component {

  render () {
    const { foods } = this.props;
    return (

      <div>
        <h1>Favorite Foods</h1>
        <ul id="food-list">
        {
          foods.map(food => (
            <li key={food.id}>{food.name}</li>
          ))
        }
        </ul>
      </div>

    );

  }

}
