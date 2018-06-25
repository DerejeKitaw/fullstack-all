import React from 'react';

import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import { shallow } from 'enzyme';

// Your component is imported here!
import Homepage from '../react/Homepage';
import Profile from '../react/Profile';
import FavoriteFoods from '../react/FavoriteFoods';

// Let's put it all together! I'm so excited!
// The Homepage component should render my FavoriteFoods and my Profile!
describe('Homepage', () => {

  let HomepageWrapper;

  beforeEach('create <Homepage /> wrapper', () => {

    HomepageWrapper = shallow(<Homepage />);

  });

  describe('renders the other components', () => {


    it('renders the Profile component', () => {

      expect(HomepageWrapper.find(Profile)).to.have.length(1);

    });

    it('renders the FavoriteFoods component', () => {

      expect(HomepageWrapper.find(FavoriteFoods)).to.have.length(1);

    });

  }); // end describe renders the other components

  describe('manages state for the Profile and FavoriteFoods components', () => {

    it('starts with an initial state object', () => {

      const currentState = HomepageWrapper.state();
      expect(currentState).to.be.an('object');

    });

    it('state object starts with an empty favoriteFoods array', () => {

      const currentState = HomepageWrapper.state();
      expect(currentState.favoriteFoods).to.be.an('array');
      expect(currentState.favoriteFoods.length).to.be.equal(0);

    });

    it('state object starts with an empty pugProfile object', () => {

      const currentState = HomepageWrapper.state();
      expect(currentState.pugProfile).to.be.an('object');
      expect(currentState.pugProfile).to.be.deep.equal({});

    });

  }); // end describe manages state for the Profile and FavoriteFoods components

  describe('passes state down as props to Profile and FavoriteFoods', () => {

    const profile = { name: 'Cody', age: '6', description: 'Cody is a loveable pug!' };
    const foods = [{ id: 1, name: 'Pizza' }, { id: 2, name: 'Peanut Butter' }, { id: 3, name: 'Pancakes' }];


    it('passes pugProfile from state to Profile as a prop called profile', () => {

      // This is just like actually calling setState in the Homepage component!
      // This means the render function executes again!
      // Arf!
      HomepageWrapper.setState({ pugProfile: profile });

      // HomepageWrapper.find(Profile) finds the Profile component Homepage renders,
      //// and returns a ProfileWrapper
      const ProfileWrapper = HomepageWrapper.find(Profile);

      // ProfileWrapper.props() ... returns the props that have been passed to the component
      expect(ProfileWrapper.props().profile.name).to.be.equal('Cody');
      expect(ProfileWrapper.props().profile.age).to.be.equal('6');
      expect(ProfileWrapper.props().profile.description).to.be.equal('Cody is a loveable pug!');

    });

    it('passes favoriteFoods from state to FavoriteFoods as a prop called foods', () => {

      HomepageWrapper.setState({ favoriteFoods: foods });

      const FavoriteFoodsWrapper = HomepageWrapper.find(FavoriteFoods);

      expect(FavoriteFoodsWrapper.props().foods).to.be.deep.equal(foods);

    });

    it('passes new props when state is updated', () => {

      const lucaProfile = {
        name: 'Luca',
        age: 5,
        description: 'Me favorite things a hug!'
      };

      const lucasFavoriteFood = [{ name: 'Roast chicken', id: 7 }];

      HomepageWrapper.setState({
        pugProfile: lucaProfile,
        favoriteFoods: lucasFavoriteFood
      });

      const ProfileWrapper = HomepageWrapper.find(Profile);
      const FavoriteFoodsWrapper = HomepageWrapper.find(FavoriteFoods);

      expect(ProfileWrapper.props().profile).to.be.deep.equal(lucaProfile);
      expect(FavoriteFoodsWrapper.props().foods).to.be.deep.equal(lucasFavoriteFood);

    });

  }); // end describe passes state down as props to Profile and FavoriteFoods

}); // end describe Homepage
