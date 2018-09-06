const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const server = require('../server');

process.env.NODE_ENV = 'test';

const should = chai.should();
chai.use(chaiHttp);

describe('GET /hello', () => {
  it('should return Hello', (done) => {
    chai.request(server)
      .get('/hello')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res).to.be.a.json;
        expect(res.body.greeting).to.be.equal('Hello');
        done();
      });
  });
});
