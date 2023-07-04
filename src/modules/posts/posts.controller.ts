import { Controller, Get, Post } from '@nestjs/common'

@Controller('posts')
export class PostsController {
  @Post()
  create(): string {
    return 'Новый пост'
  }

  @Get()
  getAllPosts(): string {
    return 'Все посты'
  }
}