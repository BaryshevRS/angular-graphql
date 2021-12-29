import { Args, Mutation, Query, Resolver, Root } from '@nestjs/graphql';
import { Todo } from './todo.interface';
import { TodoService } from "./todo.service";
import { CreateTodoDTO } from "./dto/create-todo.dto";

@Resolver('Todo')
export class TodoResolver {
    constructor(private todoService: TodoService) {}

    @Query()
    async todos(): Promise<Todo[]> {
        return this.todoService.find();
    }

    @Query()
    async todo(@Args('id') id: string): Promise<Todo> {
        return this.todoService.findOne(id);
    }

    @Mutation() async createTodo(
      @Root() root,
      @Args('todo') todo: CreateTodoDTO
    ): Promise<Todo> {
        return this.todoService.create(todo);
    }

    @Mutation() async deleteTodo(
      @Root() root,
      @Args('id') id: string
    ): Promise<boolean> {
        return this.todoService.deleteOne(id);
    }

    @Mutation() async updateTodo(
      @Root() root,
      @Args('id') id: string,
      @Args('todo') todo: Todo
    ): Promise<Todo> {
        return this.todoService.updateOne(id, todo);
    }
}
