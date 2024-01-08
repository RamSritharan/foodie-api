const request = require("supertest");
const app = require("../server");

//get all restaurants
describe("GET /restaurants", () => {
  it("it should return all restaurants", async () => {
    const res = await request(app).get("/restaurants");
    expect(res.statusCode).toBe(200);
  });
});

// describe("GET /restaurant/:id", () => {
//   it("it should return a specific restaurant", async () => {
//     const res = await request(app).get("/restaurant/:id").setEncoding({
//       id: "658f6e9826b4def26367b054",
//     });
//     expect(res.statusCode).toBe(200);
//   });
// });

//post a restaurant
describe("POST /restaurantPost", () => {
  it("should create a restaurant", async () => {
    const res = await request(app).post("/restaurantPost").send({
      restaurantName: "Tora",
      restaurantType: "High-end Sushi - Japanese",
      restaurantPriceMeter: "$$$",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.restaurantName).toBe("Tora");
  });
});
