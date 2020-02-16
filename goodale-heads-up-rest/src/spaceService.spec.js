import { expect } from 'chai';
import spaceCount from './spaceService.js';

describe('SpaceCount Should', () => {

  it('Return 544 spaces', () => {
    expect(spaceCount()).to.eql(544);
  });

});