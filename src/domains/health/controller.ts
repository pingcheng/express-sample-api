import { HealthResponse } from "./responses/HealthResponse";
import { Get, JsonController } from "routing-controllers";
import { OpenAPI, ResponseSchema } from "routing-controllers-openapi";

@JsonController("/health")
export class HealthController {
  @Get("/")
  @ResponseSchema(HealthResponse)
  @OpenAPI({
    description:
      "Get the health information about the server, including the system name and the server date and time."
  })
  public async getHealth(): Promise<HealthResponse> {
    return {
      name: "express-sample-api",
      date: new Date().toString()
    };
  }
}
