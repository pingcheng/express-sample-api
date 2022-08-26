import { HealthResponse } from "./interface";

export default class HealthController {
  public async getHealth(): Promise<HealthResponse> {
    return {
      name: "express-sample-api",
      date: new Date().toString()
    };
  }
}
