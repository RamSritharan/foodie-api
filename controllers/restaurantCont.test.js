const request = require("supertest");
const app = require("../server");

//get all restaurants
describe("GET /restaurants", () => {
  it("it should return all restaurants", async () => {
    const res = await request(app).get("/restaurants");
    expect(res.statusCode).toBe(200);
  });
});
