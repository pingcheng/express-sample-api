import express, { Router } from "express";
import { validationMetadatasToSchemas } from "class-validator-jsonschema";
import { defaultMetadataStorage } from "class-transformer/storage";
import { getMetadataArgsStorage } from "routing-controllers";
import { routingControllersToSpec } from "routing-controllers-openapi";
import { HealthController } from "../domains/health/controller";

const routes: Router = express.Router();

routes.get("/docs", (req, res) => {
  res.sendFile("index.html", {
    root: __dirname
  });
});

routes.get("/docs/spec", (req, res) => {
  const schemas = validationMetadatasToSchemas({
    classTransformerMetadataStorage: defaultMetadataStorage,
    refPointerPrefix: "#/components/schemas/"
  });

  const storage = getMetadataArgsStorage();
  const spec = routingControllersToSpec(
    storage,
    {
      controllers: [HealthController]
    },
    {
      components: {
        schemas
      },
      info: {
        title: "express-sample-api",
        version: "1.0.0"
      }
    }
  );

  res.send(spec);
});

export { routes };
