import supertest from "supertest"

import { User } from '../types/types';
import createSingleServer from '../server';

const users: User[] = [];

const app = createSingleServer(users);

describe('Testing scenario 1', () => {
  let id = '';
  test('Expecting GET response with status 200 and empty array', async () => {
    const response = await supertest(app)
      .get('/api/users')
      .set('Accept', 'application/json')
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  })
  test('Expecting POST response with status 201 and result object', (done) => {
    const user: User = {   
      "username": "Vasya",
      "age": 32,
      "hobbies": [
        "fishing",
        "cats"
      ]
    };
    supertest(app)
      .post("/api/users")
      .expect("Content-Type", /json/)
      .send(JSON.stringify(user))
      .expect(201)
      .expect((res) => {
        expect(res.body.username).toEqual("Vasya");
        expect(res.body.age).toEqual(32);
        expect(res.body.hobbies).toEqual(["fishing", "cats"]);
        id = res.body.id;
      })
      .end((err, res) => {
        if (err) return done(err);
        
        return done();
      });
  })
  test('Expecting response of GET by id is user ', (done) => {
    supertest(app)
    .get(`/api/users/${id}`)
    .expect("Content-Type", /json/)
    .expect(200)
    .expect((res) => {      
      expect(res.body[0].username).toEqual("Vasya");
      expect(res.body[0].age).toEqual(32);
      expect(res.body[0].hobbies).toEqual(["fishing", "cats"]);
    })
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
  })
  test('Expecting response of PUT by id is user ', (done) => {
    const newUser:User = {   
      "username": "Misha",
      "age": 52,
      "hobbies": [
        "dogs",
        "riding"
      ]
    };
    supertest(app)
    .put(`/api/users/${id}`)
    .expect("Content-Type", /json/)
    .send(newUser)
    .expect(200)
    .expect((res) => {      
      expect(res.body.username).toEqual("Misha");
      expect(res.body.age).toEqual(52);
      expect(res.body.hobbies).toEqual(["dogs", "riding"]);
      expect(res.body.id).toEqual(id);
    })
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
  })
  test('Expecting response of DELETE by id is code 204', (done) => {
    supertest(app)
    .delete(`/api/users/${id}`)
    .expect('Content-Type', /json/)
    .expect(204, done)
  })
  test('Expecting response of GET by id after DELETE is code 404 and message that user doesnt exist', (done) => {
    supertest(app)
    .get(`/api/users/${id}`)
    .expect("Content-Type", /json/)
    .expect(404)
    .expect((res) => {   
      expect(res.body.title).toEqual('Not Found');
      expect(res.body.message).toEqual('User does not exist');   
    })
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
  })
})