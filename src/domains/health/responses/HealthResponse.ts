import { IsString } from "class-validator";
import { JSONSchema } from "class-validator-jsonschema";

export class HealthResponse {
  @IsString()
  @JSONSchema({
    description: "The application name",
    example: "express-sample-api"
  })
  name: string;

  @IsString()
  @JSONSchema({
    description: "The server date and time",
    example: new Date().toString()
  })
  date: string;
}
