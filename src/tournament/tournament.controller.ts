import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Tournament Api")
@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Post()
  @ApiOperation({ summary: 'create one tournament' })
  create(@Body() createTournamentDto: CreateTournamentDto) {
    return this.tournamentService.create(createTournamentDto);
  }

  @Get()
  @ApiOperation({ summary: 'find all tournament' })
  findAll() {
    return this.tournamentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find One tournament' })
  findOne(@Param('id') id: string) {
    return this.tournamentService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update update tournament' })
  update(@Param('id') id: string, @Body() updateTournamentDto: UpdateTournamentDto) {
    return this.tournamentService.update(id, updateTournamentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete(softDelete) one tournament' })
  remove(@Param('id') id: string) {
    return this.tournamentService.remove(id);
  }
}
