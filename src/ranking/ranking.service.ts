import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRankingDto } from './dto/create-ranking.dto';
import { UpdateRankingDto } from './dto/update-ranking.dto';
import { Ranking } from './entities/ranking.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tournament } from 'src/tournament/entities/tournament.entity';

@Injectable()
export class RankingService {

  constructor(@InjectRepository(Ranking) private readonly rankingRepository: Repository<Ranking>) {}

  create(createRankingDto: CreateRankingDto) {
    const rankingCreated = this.rankingRepository.create(createRankingDto)
    return this.rankingRepository.save(rankingCreated)
  }

  async findAll() {
    const rankingArray = await this.rankingRepository.find({relations: {player: true, tournament: true}})
    rankingArray.sort((a, b) => b.score - a.score)
    return rankingArray
  }

  async findOne(id: string) {
    const rankingFound = await this.rankingRepository.findOneBy({id})
    return rankingFound
  }

  async update(id: string, updateRankingDto: UpdateRankingDto) {
    const rankingFound = await this.findOne(id)
    if(!rankingFound) {throw new NotFoundException(`Ranking with id: ${id} was not found`)}
    const rankingUpdatedResult = await this.rankingRepository.update(id, updateRankingDto)
    const rankingUpdated = await this.findOne(id)
    return {...rankingUpdatedResult, rankingUpdated}
  }

  remove(id: string) {
    return this.rankingRepository.delete(id)
  }

  async updateScore(winner: string, tournamentID: Tournament) {
    const rankingFound = await this.rankingRepository.createQueryBuilder("rankings").where("rankings.tournament = :tournament", {tournament:tournamentID}).andWhere("rankings.player = :player", {player:winner}).getOne()
    if(!rankingFound){
      throw new NotFoundException(`The ranking for the player: ${winner} in the tournament Id: ${tournamentID} could not be found`)
    }
    rankingFound.score += 3
    const {id, ...rankingToUpdate} = rankingFound
    return await this.update(rankingFound.id, rankingToUpdate)
  }
}
