const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: {
    title: "TAST BOARD",
    description: "Description",
  },
  servers: [
    {
      url: "http://localhost:3001",
      description: "LOCAL SERVER",
    },
    {
      url: "http://TEST",
      description: "TEST SERVER",
    },
    {
      url: "http://PROD",
      description: "PROD SERVER",
    },
  ],
};

const outputFile = "./swagger-output.json";
const routes = ["./server.js"];

swaggerAutogen(outputFile, routes, doc);
