
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    todos(): Nullable<Nullable<Todo>[]> | Promise<Nullable<Nullable<Todo>[]>>;
    todo(id: string): Nullable<Todo> | Promise<Nullable<Todo>>;
    tabs(): Nullable<Nullable<Tab>[]> | Promise<Nullable<Nullable<Tab>[]>>;
}

export interface Todo {
    id: string;
    name?: Nullable<string>;
    isReady?: Nullable<boolean>;
}

export interface Tab {
    id: string;
    name?: Nullable<string>;
}

type Nullable<T> = T | null;
