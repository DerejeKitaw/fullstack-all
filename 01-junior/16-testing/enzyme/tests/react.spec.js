import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import Critters from '../client/components/Critters.js';
import Navbar from '../client/components/Navbar.js';
import Main from '../client/components/Main.js';

chai.use(sinonChai);

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Critters component', () => {
  it('has an h1 that renders the right title', () => {
    let testCritters = [{
      name: "Snuffles"
    }, {
      name: "Ruby"
    }];
    let testTitle = "my cutie critters";

    let crittersWrapper = shallow(<Critters critters={testCritters} title={testTitle} />);

    expect(crittersWrapper.find('h1').text()).to.equal("my cutie critters");
  });
});

describe('Navbar component', () => {
  it('calls selectCritters on button click - dog', () => {
    let selectCrittersSpy = sinon.spy();
    let navbarWrapper = shallow(<Navbar selectCritters={selectCrittersSpy} />);
    navbarWrapper.find('button#dogs').simulate('click');
    expect(selectCrittersSpy).to.have.been.calledOnce;
  });

  it('calls selectCritters with the right params', () => {
    let selectCrittersSpy = sinon.spy();
    let navbarWrapper = shallow(<Navbar selectCritters={selectCrittersSpy} />);
    navbarWrapper.find('button#dogs').simulate('click');
    expect(selectCrittersSpy).to.have.been.calledWith('dogs');
  });
});
