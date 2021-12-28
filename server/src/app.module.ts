import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from "path";
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from "@nestjs/mongoose";
import 'dotenv/config.js';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@mongocloud.4sqqe.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
    ),
    GraphQLModule.forRoot({
    typePaths: ['**/*.graphql'],
    definitions: {
      path: join(process.cwd(), 'src/graphql.ts')
    }
  }),
    TodoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
