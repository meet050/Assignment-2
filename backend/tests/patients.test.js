// backend/tests/patients.test.js
const request = require("supertest");
const app = require("../app");

describe("Patients API", () => {
  it("should fetch all patients", async () => {
    const res = await request(app).get("/api/patients");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
