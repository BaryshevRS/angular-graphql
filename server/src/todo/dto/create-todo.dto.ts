import { IsString, IsNotEmpty } from "class-validator";

export class CreateTodoDTO {
  @IsString()
  @IsNotEmpty()
  name: String;

  @IsString()
  @IsNotEmpty()
  isReady: Boolean;
}