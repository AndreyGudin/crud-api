import supertest from "supertest";

import { User } from "../types/types";
import createSingleServer from "../server";

const users: User[] = [];

const app = createSingleServer(users);

describe("Test scenario 2", () => {
  test("Expecting GET response with status 200 and length of body 3 after 3 POST response", (done) => {
    const user: User = {
      username: "Vasya",
      age: 32,
      hobbies: ["fishing", "cats"],
    };
    const user2: User = {
      username: "Misha",
      age: 36,
      hobbies: ["dogs", "riding"],
    };
    const user3: User = {
      username: "Sasha",
      age: 22,
      hobbies: ["reading", "games"],
    };

    supertest(app)
      .post("/api/users")
      .expect("Content-Type", /json/)
      .send(JSON.stringify(user))
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
    supertest(app)
      .post("/api/users")
      .expect("Content-Type", /json/)
      .send(JSON.stringify(user2))
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
    supertest(app)
      .post("/api/users")
      .expect("Content-Type", /json/)
      .send(JSON.stringify(user3))
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
    supertest(app)
      .get(`/api/users`)
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body.length).toEqual(3);
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
