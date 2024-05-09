import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { QuestsService } from './quests.service';
import { CreateQuestDto } from './dto/create-quest.dto';
import { UpdateQuestDto } from './dto/update-quest.dto';
import { CreateSideQuestDto } from './dto/create-side-quest.dto';
import { UpdateSideQuestDto } from './dto/update-side-quest.dto';
import { AuthGuard } from '../auth/auth.guard';
import { CurrentUser } from '../../common/decorators/auth.decorator';
import { JwtPayloadDto } from '../auth/dto/jwt-payload.dto';

@Controller('quests')
export class QuestsController {
  constructor(private readonly questsService: QuestsService) {}

  @UseGuards(AuthGuard)
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async create(@CurrentUser() user: JwtPayloadDto, @Body() createQuestDto: CreateQuestDto) {
    return await this.questsService.create(user.id, createQuestDto);
  }

  @UseGuards(AuthGuard)
  @Get('main')
  @HttpCode(HttpStatus.OK)
  async findAll(@CurrentUser() user: JwtPayloadDto) {
    return await this.questsService.findAll(user.id);
  }

  /*@UseGuards(AuthGuard)
  @Get('main/:id')
  @HttpCode(HttpStatus.OK)
  findOne(@CurrentUser() user: JwtPayloadDto, @Param('id') id: string) {
    return this.questsService.findOne(user.id, +id);
  }*/

  @UseGuards(AuthGuard)
  @Patch('main/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @CurrentUser() user: JwtPayloadDto,
    @Param('id') id: string,
    @Body() updateQuestDto: UpdateQuestDto
  ) {
    await this.questsService.update(user.id, +id, updateQuestDto);
  }

  @UseGuards(AuthGuard)
  @Delete('main/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@CurrentUser() user: JwtPayloadDto, @Param('id') id: string) {
    await this.questsService.remove(user.id, +id);
  }

  @Post('side')
  createSide(@Body() createQuestDto: CreateSideQuestDto) {
    return this.questsService.createSide(createQuestDto);
  }

  @Patch('side/:id')
  updateSide(@Param('id') id: string, @Body() updateQuestDto: UpdateSideQuestDto) {
    return this.questsService.updateSide(+id, updateQuestDto);
  }

  @Delete('side/:id')
  removeSide(@Param('id') id: string) {
    return this.questsService.removeSide(+id);
  }

  @UseGuards(AuthGuard)
  @Get('sub')
  @HttpCode(HttpStatus.OK)
  findAllSub(@CurrentUser() user: JwtPayloadDto) {
    return this.questsService.findAll(user.id);
  }

  /*@UseGuards(AuthGuard)
  @Get('sub/:id')
  @HttpCode(HttpStatus.OK)
  findOneSub(@CurrentUser() user: JwtPayloadDto, @Param('id') id: string) {
    return this.questsService.findOne(user.id, +id);
  }*/

  @UseGuards(AuthGuard)
  @Patch('sub/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async updateSub(
    @CurrentUser() user: JwtPayloadDto,
    @Param('id') id: string,
    @Body() updateQuestDto: UpdateQuestDto
  ) {
    await this.questsService.update(user.id, +id, updateQuestDto);
  }

  @UseGuards(AuthGuard)
  @Delete('sub/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async removeSub(@CurrentUser() user: JwtPayloadDto, @Param('id') id: string) {
    await this.questsService.remove(user.id, +id);
  }
}
