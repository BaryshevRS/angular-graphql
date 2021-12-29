import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { MongooseModule } from "@nestjs/mongoose";
import { TodoSchema } from "../todo.shema";

@Module({
  imports: [MongooseModule.forFeature([{name: 'Todo', schema: TodoSchema}])],
  providers: [TodoService, TodoResolver]
})
export class TodoModule {}
