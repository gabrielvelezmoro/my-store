import express from "express";
import payload from "payload";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./swagger.json";

require("dotenv").config();
const app = express();

// Redirect root to Admin panel

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOutput));
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(3000);
};

start();
