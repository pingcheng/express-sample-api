import { Application } from "express";
import { RoutingControllersOptions } from "routing-controllers/types/RoutingControllersOptions";
import { HealthController } from "../domains/health/controller";
import { useExpressServer } from "routing-controllers";
import { routes as docsRoutes } from "../docs";

// Routing from OpenApi controllers
export const routingControllersOptions: RoutingControllersOptions = {
  controllers: [HealthController]
};

export const registerRoutes = (app: Application): void => {
  useExpressServer(app, routingControllersOptions);
  app.use(docsRoutes);
};
