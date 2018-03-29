/* eslint-disable */
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app')();

const expect = chai.expect;
chai.use(chaiHttp);

describe('ROUTES', () => {
  describe('POST /palindrome', () => {
    it('"ana" should return a 200 response', () => {
      return chai.request(app)
        .post('/palindrome')
        .send({ value: "ana" })
        .then(res => {
          expect(res.status).to.eql(200);
        });
    });

    it('"macaco" should return a 400 response', () => {
      return chai.request(app)
        .post('/palindrome')
        .send({ value: "macaco" })
        .then(res => {
          expect(res.status).to.eql(400);
        });
    });

    it('"A MAN A PLAN A CANAL PANAMA" should return a 400 response', () => {
      return chai.request(app)
        .post('/palindrome')
        .send({ value: "A MAN A PLAN A CANAL PANAMA" })
        .then(res => {
          expect(res.status).to.eql(200);
        });
    });
  });
});
