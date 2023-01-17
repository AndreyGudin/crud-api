import supertest from "supertest";

import { User } from "../types/types";
import createSingleServer from "../server";

const users: User[] = [];

const app = createSingleServer(users);

describe("Test scenario 3", () => {
  test('Expecting GET response with status 404 if route is invalid', async () => {
    const response = await supertest(app)
      .get('/api/test/test')
      .set('Accept', 'application/json')
    expect(response.status).toEqual(404);
  })
  test('Expecting GET response with status 400 if UUID is invalid', async () => {
    const response = await supertest(app)
      .get('/api/users/test')
      .set('Accept', 'application/json')
    expect(response.status).toEqual(400);
  })
  test('Expecting POST response with status 400 and correct message if body is invalid', (done) => {
    const user = {
      "hobbies": [
        "fishing",
        "cats"
      ]
    };
    supertest(app)
      .post("/api/users")
      .expect("Content-Type", /json/)
      .send(JSON.stringify(user))
      .expect(400)
      .expect((res) => {   
        expect(res.body.title).toEqual('Validation is failed');
        expect(res.body.message).toEqual('Request body is not valid');   
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  })

})