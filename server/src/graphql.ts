
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateTodoInput {
    name: string;
    isReady: boolean;
}

export interface UpdateTodoInput {
    name?: Nullable<string>;
    isReady?: Nullable<boolean>;
}

export interface IQuery {
    todos(): Nullable<Nullable<Todo>[]> | Promise<Nullable<Nullable<Todo>[]>>;
    todo(id: string): Nullable<Todo> | Promise<Nullable<Todo>>;
    tabs(): Nullable<Nullable<Tab>[]> | Promise<Nullable<Nullable<Tab>[]>>;
}

export interface Todo {
    _id: string;
    name?: Nullable<string>;
    isReady?: Nullable<boolean>;
}

export interface Tab {
    _id: string;
    name?: Nullable<string>;
}

export interface IMutation {
    createTodo(todo: CreateTodoInput): Nullable<Todo> | Promise<Nullable<Todo>>;
    deleteTodo(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;
    updateTodo(id: string, todo?: Nullable<UpdateTodoInput>): Nullable<Todo> | Promise<Nullable<Todo>>;
}

type Nullable<T> = T | null;
