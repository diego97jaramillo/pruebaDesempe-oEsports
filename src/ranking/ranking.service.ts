import { Injectable } from '@nestjs/common';
import { CreateRankingDto } from './dto/create-ranking.dto';
import { UpdateRankingDto } from './dto/update-ranking.dto';
import { Ranking } from './entities/ranking.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RankingService {

  constructor(@InjectRepository(Ranking) private readonly rankingRepository: Repository<Ranking>) {}

  create(createRankingDto: CreateRankingDto) {
    const rankingCreated = this.rankingRepository.create(createRankingDto)
    console.log(typeof createRankingDto.score);


    return this.rankingRepository.save(rankingCreated)
  }

  async findAll() {
    const rankingArray = await this.rankingRepository.find({relations: {player: true, tournament: true}})
    rankingArray.sort((a, b) => b.score - a.score)
    return rankingArray
  }

  async findOne(id: string) {
    const rankingFound = await this.rankingRepository.findOneBy({id})
    console.log(typeof rankingFound.score);
    return rankingFound
  }

  update(id: string, updateRankingDto: UpdateRankingDto) {
    return `This action updates a #${id} ranking`;
  }

  remove(id: string) {
    return this.rankingRepository.delete(id)
  }
}
