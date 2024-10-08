import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { Result } from './entities/result.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RankingService } from 'src/ranking/ranking.service';

@Injectable()
export class ResultService {
  constructor(
    @InjectRepository(Result) private readonly resultRepository: Repository<Result>,
    private readonly rankingService: RankingService) {}


  async create(createResultDto: CreateResultDto) {
    const resultCreated = this.resultRepository.create(createResultDto)
    const result = await this.rankingService.updateScore(createResultDto.winner, createResultDto.tournament)
    console.log(result);

    return await this.resultRepository.save(resultCreated)
  }

  findAll() {
    return this.resultRepository.find({relations: {tournament: true}})
  }

  findOne(id: string) {
    return this.resultRepository.findOneBy({id})
  }

  async update(id: string, updateResultDto: UpdateResultDto) {
    const resultFound = await this.findOne(id)
    if(!resultFound) {
      throw new NotFoundException(`result with id ${id.toUpperCase()} was not found`)
    }
    const resultOutcome = await this.resultRepository.update(id, updateResultDto)
    const resultUpdated = await this.findOne(id)
    return {...resultOutcome, resultUpdated}
  }

  remove(id: string) {
    return this.resultRepository.delete(id)
  }
}
