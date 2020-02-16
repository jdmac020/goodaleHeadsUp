import { expect } from 'chai';
import { spy } from 'sinon';

import callMyFunction from '../services/exampleService.js'

describe('Example tests', () => {

    it('Is True', () => {
      expect(true).to.eql(true);
    });

    it('Is False', () => {
      expect(false).to.eql(false);
    });
  });

  describe('Sinon experiments', () => {

    it('calls the passed function', () => {
      const callback = spy();

      callMyFunction(callback);
      expect(callback.called).to.eql(true);
    });
  });