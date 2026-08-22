import { Module } from '@nestjs/common';
import { PostService } from './posts.service';
import { PostController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, postsSchema } from './shcema/post.schema';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[MongooseModule.forFeature([{name: Post.name, schema: postsSchema}]), UsersModule],
  controllers: [PostsController],
  providers: [PostsService],
})

export class PostsModule {}