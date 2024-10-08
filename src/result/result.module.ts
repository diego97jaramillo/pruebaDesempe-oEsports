import { Module } from '@nestjs/common';
import { ResultService } from './result.service';
import { ResultController } from './result.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Result } from './entities/result.entity';
import { RankingModule } from 'src/ranking/ranking.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Result]),
    RankingModule
  ],
  controllers: [ResultController],
  providers: [ResultService],
})
export class ResultModule {}
