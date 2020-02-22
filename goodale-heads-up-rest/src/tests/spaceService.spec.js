import { expect } from 'chai';
import spaceCount from '../services/spaceService.js';

describe('SpaceCount Should', () => {

  it('Return 544 spaces', () => {
    expect(spaceCount()).to.eql(544);
  });

});