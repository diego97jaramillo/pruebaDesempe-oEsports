import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerService {
  constructor(@InjectRepository(Player) private readonly playerRepository: Repository<Player>) {}

  create(createPlayerDto: CreatePlayerDto) {
    const playerCreated = this.playerRepository.create(createPlayerDto)
    return this.playerRepository.save(playerCreated)
  }

  findAll() {
    return this.playerRepository.find();
  }

  findOne(id: string) {
    return this.playerRepository.findOneBy({id});
  }

  async update(id: string, updatePlayerDto: UpdatePlayerDto) {
    let userFound = await this.findOne(id)
    if (!userFound) {
      throw new NotFoundException(`Player with ID: ${id} was not found`)
    }
    const result = await this.playerRepository.update(id, updatePlayerDto)
    const userUpdated = await this.findOne(id)
    return {...result,
      userUpdated
    }
  }

  remove(id: string) {
    return this.playerRepository.softDelete(id)
  }
}
