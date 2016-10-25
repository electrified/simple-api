/* eslint-env mocha */
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

const {mockResponseObj} = require('../utils/mocks');
const {
  createSuccessHandler,
  createErrorHandler,
} = require('./expressHandlerFactory');

describe('expressHandlersFactory', () => {

  let handleSuccess, handleError;
  let sandbox, resStatusSpy, resJsonSpy;

  const res = mockResponseObj;
  const data = {
    id: 1,
  };
  const err = {
    message: 'error',
  };

  describe('createSuccessHandler(res)', () => {
    it('should return a handleSuccess function', () => {
      handleSuccess = createSuccessHandler(res);
      expect(handleSuccess).to.be.a('function');
    });

    describe('handleSuccess(data)', () => {
      beforeEach(() => {
        sandbox = sinon.sandbox.create();
        resStatusSpy = sandbox.spy(res, 'status');
        resJsonSpy = sandbox.spy(res, 'json');

        handleSuccess = createSuccessHandler(res);
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should invoke response status method with status 200', () => {
        handleSuccess(data);
        expect(resStatusSpy).to.have.callCount(1);
        expect(resStatusSpy).to.be.calledWith(200);
      });

      it('should invoke response json method with supplied data argument', () => {
        handleSuccess(data);
        expect(resJsonSpy).to.have.callCount(1);
        expect(resJsonSpy).to.be.calledWith(data);
      });
    });
  });

  describe('createErrorHandler(res)', () => {
    it('should return a handleError function', () => {
      handleError = createErrorHandler(res);
      expect(handleError).to.be.a('function');
    });

    describe('handleError(err)', () => {
      beforeEach(() => {
        sandbox = sinon.sandbox.create();
        resStatusSpy = sandbox.spy(res, 'status');
        resJsonSpy = sandbox.spy(res, 'json');

        handleError = createErrorHandler(res);
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should invoke response status method with status 500', () => {
        handleError(err);
        expect(resStatusSpy).to.have.callCount(1);
        expect(resStatusSpy).to.be.calledWith(500);
      });

      it('should invoke response json method with supplied err argument', () => {
        handleError(err);
        expect(resJsonSpy).to.have.callCount(1);
        expect(resJsonSpy).to.be.calledWith({ message: err.message });
      });
    });
  });
});
