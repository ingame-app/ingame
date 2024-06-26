import { forwardRef, Module } from '@nestjs/common';
import { QuestsService } from './quests.service';
import { QuestsController } from './quests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quest } from './entities/quest.entity';
import { SideQuest } from './entities/side-quest.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Quest, SideQuest]), forwardRef(() => AuthModule)],
  controllers: [QuestsController],
  providers: [QuestsService],
})
export class QuestsModule {}
