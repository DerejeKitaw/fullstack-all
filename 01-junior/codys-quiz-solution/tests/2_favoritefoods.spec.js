import React from 'react';

import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import { shallow } from 'enzyme';

// Your component is imported here!
import FavoriteFoods from '../react/FavoriteFoods';

// Oh boy! This is my favorite part! Food for me!
describe('FavoriteFoods', () => {

  describe('should render out a list of food props it receives', () => {

    let foods, FavoriteFoodsWrapper;

    beforeEach('create <FavoriteFoods /> wrapper', () => {

      foods = [
        {
          id: 1,
          name: 'Pizza'
        },
        {
          id: 2,
          name: 'Peanut Butter'
        },
        {
          id: 3,
          name: 'Pancakes'
        }
      ];

      // Did you notice? All these foods begin with 'p'! Just like me! Cuz I'm a pug!

      FavoriteFoodsWrapper = shallow(<FavoriteFoods foods={foods}/>);
    });

    it('renders a list of <li> for each food (3 total)', () => {

      // We should find three li elements when <FavoriteFoods foods={foods} /> renders!
      expect(FavoriteFoodsWrapper.find('li')).to.have.length(3);

    });

    it('renders a list of <li> within the <ul>', () => {

      // Also, we should find these three li elements within a ul element!
      expect(FavoriteFoodsWrapper.find('ul').find('li')).to.have.length(3);

    });

    it('renders each <li> with the name of each food', () => {

      expect(FavoriteFoodsWrapper.contains(<li>Pizza</li>)).to.be.equal(true);
      expect(FavoriteFoodsWrapper.contains(<li>Peanut Butter</li>)).to.be.equal(true);
      expect(FavoriteFoodsWrapper.contains(<li>Pancakes</li>)).to.be.equal(true);

    });

    it('each <li> contains a `key` prop equal to the food\'s id', () => {

      expect(FavoriteFoodsWrapper.find('li').at(0).key()).to.equal("1");
      expect(FavoriteFoodsWrapper.find('li').at(1).key()).to.equal("2");
      expect(FavoriteFoodsWrapper.find('li').at(2).key()).to.equal("3");

    });

    it('changes if a different set of food is sent down as props', () => {

      // Wait, I changed my mind! These are my favoritest foods!
      // Make sure we can show these, too!
      foods = [
        {
          id: 4,
          name: 'Pita bread'
        },
        {
          id: 5,
          name: 'Pudding'
        },
        {
          id: 6,
          name: 'Porkchops'
        }
      ];

      FavoriteFoodsWrapper = shallow(<FavoriteFoods foods={foods}/>);

      expect(FavoriteFoodsWrapper.find('ul').find('li')).to.have.length(3);

      expect(FavoriteFoodsWrapper.contains(<li>Pita bread</li>)).to.be.equal(true);
      expect(FavoriteFoodsWrapper.contains(<li>Pudding</li>)).to.be.equal(true);
      expect(FavoriteFoodsWrapper.contains(<li>Porkchops</li>)).to.be.equal(true);

      expect(FavoriteFoodsWrapper.find('li').at(0).key()).to.equal('4');
      expect(FavoriteFoodsWrapper.find('li').at(1).key()).to.equal('5');
      expect(FavoriteFoodsWrapper.find('li').at(2).key()).to.equal('6');

    });

  }); // end describe should render out a list of food props it receives

}); // end describe FavoriteFoods
