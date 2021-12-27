import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from "path";
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [GraphQLModule.forRoot({
    typePaths: ['**/*.graphql'],
    definitions: {
      path: join(process.cwd(), 'src/graphql.ts')
    }
  }), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
