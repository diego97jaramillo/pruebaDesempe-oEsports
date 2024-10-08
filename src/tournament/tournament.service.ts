import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tournament } from './entities/tournament.entity';

@Injectable()
export class TournamentService {
  constructor(@InjectRepository(Tournament) private readonly tournamentRepository: Repository<Tournament>) {}

  create(createTournamentDto: CreateTournamentDto) {
    const tournament = this.tournamentRepository.create(createTournamentDto);
    return this.tournamentRepository.save(tournament);
  }

  findAll() {
    return this.tournamentRepository.find({relations: {rankings: true}})
  }

  findOne(id: string) {
    return this.tournamentRepository.findOneBy({id});
  }

  async update(id: string, updateTournamentDto: UpdateTournamentDto) {
    const tournamentFound = await this.findOne(id)
    if (!tournamentFound) {
      throw new NotFoundException(`Tournament with id: ${id.toUpperCase()} could be found `)
    }
    const result = await this.tournamentRepository.update(id, updateTournamentDto)
    const tournamentUpdated = await this.findOne(id)
    return {...result, tournamentUpdated};
  }

  async remove(id: string) {
    const tournamentFound = await this.findOne(id)
    if (!tournamentFound) {
      throw new NotFoundException(`Tournament with id: ${id.toUpperCase()} could be found `)
    }
    // return this.tournamentRepository.delete(id)
    return this.tournamentRepository.softDelete(id);
  }
}
