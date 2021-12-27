import {Args, Query, Resolver} from '@nestjs/graphql';
import {Todo} from "../graphql";

@Resolver('Todo')
export class TodoResolver {
    todoList: Todo[] = [
        {id: '1', name: 'first', isReady: true},
        {id: '2', name: 'second', isReady: false},
    ]
    @Query()
    async todos(): Promise<Todo[]> {
        return Promise.resolve(this.todoList);
    }

    @Query()
    async todo(@Args('id') idTodo: string): Promise<Todo> {
        const todo = this.todoList.find(({id}) => idTodo === id)
        return Promise.resolve(todo);
    }
}
