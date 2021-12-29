import { IsString } from "class-validator";

export class UpdateTodoDTO {
  @IsString()
  name: String;

  @IsString()
  isReady: Boolean;
}