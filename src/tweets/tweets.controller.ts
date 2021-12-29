import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';

@Controller('tweets')
export class TweetsController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly tweetsService: TweetsService) {}

  @Post()
  create(@Body() createTweetDto: CreateTweetDto) {
    return this.tweetsService.createPrisma(createTweetDto);
  }

  @Get()
  findAll() {
    return this.tweetsService.findAllPrisma();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tweetsService.findOnePrisma(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTweetDto: UpdateTweetDto) {
    return this.tweetsService.updatePrisma(+id, updateTweetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tweetsService.removePrisma(+id);
  }
}
