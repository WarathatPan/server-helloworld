const supertest = require('supertest');
const app = require('../../routes/app');

const server = supertest(app);

describe('Sample Integration tests', () => {
  it('should return total = 10 when a = 5 add b = 5', (done) => {
    // calling ADD api
    server
      .post('/calculator')
      .send({
        a: 5,
        b: 5,
        operator: 'add',
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect('Content-Type', /json/)
      .expect(200, {
        a: 5,
        b: 5,
        total: 10,
      }, done);
  });

  it('should return total = 0 when a = 5 add b = -5', (done) => {
    // calling ADD api
    server
      .post('/calculator')
      .send({
        a: 5,
        b: -5,
        operator: 'add',
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect('Content-Type', /json/)
      .expect(200, {
        a: 5,
        b: -5,
        total: 0,
      }, done);
  });

  it('should return total = 0 when a = 0 add b = 0', (done) => {
    // calling ADD api
    server
      .post('/calculator')
      .send({
        a: 0,
        b: 0,
        operator: 'add',
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect('Content-Type', /json/)
      .expect(200, {
        a: 0,
        b: 0,
        total: 0,
      }, done);
  });

  it('should return http code 400 when a = "5" add b = "a"', (done) => {
    // calling ADD api
    server
      .post('/calculator')
      .send({
        a: '5',
        b: 'a',
        operator: 'add',
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect('Content-type', /json/)
      .expect(400, {
        message: 'Incorrect input b value.',
      }, done);
  });

  it('should return http code 400 when a = "a" add b = "b"', (done) => {
    // calling ADD api
    server
      .post('/calculator')
      .send({
        a: 'a',
        b: 'b',
        operator: 'add',
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect('Content-type', /json/)
      .expect(400, {
        message: 'Incorrect input a and b value.',
      }, done);
  });

  it('should return http code 400 when a = null add b = "5"', (done) => {
    // calling ADD api
    server
      .post('/calculator')
      .send({
        b: '5',
        operator: 'add',
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect('Content-type', /json/)
      .expect(400, {
        message: 'Input a not found value.',
      }, done);
  });

  it('should return total = 0 when a = 5 minus b = 5', (done) => {
    // calling ADD api
    server
      .post('/calculator')
      .send({
        a: 5,
        b: 5,
        operator: 'minus',
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect('Content-Type', /json/)
      .expect(200, {
        a: 5,
        b: 5,
        total: 0,
      }, done);
  });

  it('should return http code 400 when a = 5 minus b = "a"', (done) => {
    // calling ADD api
    server
      .post('/calculator')
      .send({
        a: 5,
        b: 'a',
        operator: 'minus',
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect('Content-Type', /json/)
      .expect(400, {
        message: 'Incorrect input b value.',
      }, done);
  });

  it('should return http code 400 when a = 5 minus b = null', (done) => {
    // calling ADD api
    server
      .post('/calculator')
      .send({
        a: 5,
        operator: 'minus',
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect('Content-Type', /json/)
      .expect(400, {
        message: 'Input b not found value.',
      }, done);
  });

  it('should return total = 25 when a = 5 multiple b = 5', (done) => {
    // calling ADD api
    server
      .post('/calculator')
      .send({
        a: 5,
        b: 5,
        operator: 'multiple',
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect('Content-Type', /json/)
      .expect(200, {
        a: 5,
        b: 5,
        total: 25,
      }, done);
  });

  it('should return total = 0 when a = 5 multiple b = 0', (done) => {
    // calling ADD api
    server
      .post('/calculator')
      .send({
        a: 5,
        b: 0,
        operator: 'multiple',
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect('Content-Type', /json/)
      .expect(200, {
        a: 5,
        b: 0,
        total: 0,
      }, done);
  });

  it('should return http code 400 when a = 5 multiple b = "g"', (done) => {
    // calling ADD api
    server
      .post('/calculator')
      .send({
        a: 5,
        b: 'g',
        operator: 'multiple',
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect('Content-type', /json/)
      .expect(400, {
        message: 'Incorrect input b value.',
      }, done);
  });

  it('should return http code 400 when a = 5 multiple b = null', (done) => {
    // calling ADD api
    server
      .post('/calculator')
      .send({
        a: 5,
        operator: 'multiple',
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect('Content-type', /json/)
      .expect(400, {
        message: 'Input b not found value.',
      }, done);
  });

  it('should return total = 1 when a = 5 devide b = 5', (done) => {
    // calling ADD api
    server
      .post('/calculator')
      .send({
        a: 5,
        b: 5,
        operator: 'devide',
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect('Content-Type', /json/)
      .expect(200, {
        a: 5,
        b: 5,
        total: 1,
      }, done);
  });

  it('should return total = 0.5 when a = 4 devide b = 8', (done) => {
    // calling ADD api
    server
      .post('/calculator')
      .send({
        a: 4,
        b: 8,
        operator: 'devide',
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect('Content-Type', /json/)
      .expect(200, {
        a: 4,
        b: 8,
        total: 0.5,
      }, done);
  });

  it('should return http code 400 when a = 5 devide b = 0', (done) => {
    // calling ADD api
    server
      .post('/calculator')
      .send({
        a: 5,
        b: 0,
        operator: 'devide',
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect('Content-type', /json/)
      .expect(400, {
        message: 'Incorrect input b value.',
      }, done);
  });

  it('should return http code 400 when a = 5 devide b = null', (done) => {
    // calling ADD api
    server
      .post('/calculator')
      .send({
        a: 5,
        operator: 'devide',
      })
      .expect((res) => {
        console.log(res.body);
      })
      .expect('Content-type', /json/)
      .expect(400, {
        message: 'Input b not found value.',
      }, done);
  });
});
