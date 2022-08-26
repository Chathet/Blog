import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { MongooseModule } from '@nestjs/mongoose'; // add this

// DOMAIN: dev-l7vru86f.us.auth0.com
// CLIENT ID: hCB5caKRLsjGUsfJuQBIMtEwMjOjSxXw
// CLIENT SECRET: R5NTZ19MqXWxYirZJWA-tXV2er3rbuSj443w_9XqVkkUhUcQ9KRJ46yTqbb6kJT5
@Module({
  imports: [BlogModule,MongooseModule.forRoot('mongodb+srv://chathet:1234@cluster0.omgorr9.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
