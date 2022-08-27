import { HealthCheckResponse } from "./responses/HealthCheckResponse";
import { Get, JsonController } from "routing-controllers";
import { OpenAPI, ResponseSchema } from "routing-controllers-openapi";

@JsonController("/health")
export class HealthCheckController {
  @Get("/")
  @ResponseSchema(HealthCheckResponse)
  @OpenAPI({
    description:
      "Get the health information about the server, including the system name and the server date and time."
  })
  public async healthCheck(): Promise<HealthCheckResponse> {
    return {
      name: "express-sample-api",
      date: new Date().toString()
    };
  }
}
