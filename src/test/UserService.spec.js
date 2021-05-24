const request = require('supertest');
const app = require('../index');

describe('Users API', async () => {

  describe('When a valid user is inserted', () => {
    it('POST /users returns a successful response', async () => {
      const user = {
        name: 'Davi Cedraz',
        email: 'davioler@gmail.com'
      }

      await request(app)
        .post('/users')
        .send(user)
        .then(res => {
          console.log(res);
          expect(res.status).toBe(201)
          expect(res.body).toEqual({
            id: '1',
            name: 'Davi Cedraz',
            email: 'davioler@gmail.com'
          })
        })
    });

    describe('but a email already exists', () => {
      it('POST /users returns 409 Conflict', async () => {
        const user = {
          name: 'Davi Cedraz',
          email: 'davioler@gmail.com'
        }
        await request(app)
          .post('/users')
          .send(user)
          .catch(err => {
            expect(err.status).toBe(429)
          })
      });
    })
  })

  describe('When there are users in database', () => {
    describe('GET /users/:id', () => {

      it('returns 404 when an user not exists', async () => {
        await request(app)
          .get('/users/0')
          .catch(err => {
            expect(err.status).toBe(404)
          })
      });

      it('returns 200 when an user exists', async () => {
        await request(app)
          .get('/users/1')
          .then(res => {
            expect(res).to.be.json
            expect(res).to.have.status(200)
            expect(res.body).toEqual({
              id: '1',
              name: 'Davi Cedraz',
              email: 'davioler@gmail.com'
            })
          })
      });
    })
  })
})
