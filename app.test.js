const request = require("supertest");
const server = require("./app");

describe("App", () => {
  it('should return "Welcome to Jenkins" when GET request is made to "/"', async () => {
    const response = await request(server).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Welcome to Jenkins 1");
  });
});
