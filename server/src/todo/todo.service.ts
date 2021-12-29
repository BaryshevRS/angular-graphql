import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Todo } from "./todo.interface";
import { InjectModel } from "@nestjs/mongoose";
import { CreateTodoDTO } from './dto/create-todo.dto';
import { UpdateTodoDTO } from './dto/update-todo.dto';

@Injectable()
export class TodoService {

  constructor(
    @InjectModel('Todo')
      private readonly todoModel: Model<Todo>
  ) {}

  async find(): Promise<Todo[]> {
    return this.todoModel.find();
  }

  async findOne(id: string): Promise<Todo> {
    return this.todoModel.findById(id);
  }

  async create(todo: CreateTodoDTO): Promise<Todo> {
    return this.todoModel.create(todo);
  }

  async deleteOne(id: string): Promise<boolean> {
    try {
      await this.todoModel.deleteOne({ _id: id });
      return true;
    } catch (e) {
      return false;
    }
  }

  async updateOne(id: String, todo: UpdateTodoDTO): Promise<Todo> {
    return this.todoModel.findByIdAndUpdate({ _id: id }, todo, {new: true});
  }
}
