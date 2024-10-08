import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RankingService } from './ranking.service';
import { CreateRankingDto } from './dto/create-ranking.dto';
import { UpdateRankingDto } from './dto/update-ranking.dto';
import { xApiKey } from 'src/common/guards/x-api.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Ranking Api")
@Controller('ranking')
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}

  @Post()
  @ApiOperation({ summary: 'create one ranking' })
  create(@Body() createRankingDto: CreateRankingDto) {
    return this.rankingService.create(createRankingDto);
  }

  @UseGuards(xApiKey)
  @Get()
  @ApiOperation({ summary: 'find all rankings' })
  findAll() {
    return this.rankingService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'find one ranking' })
  findOne(@Param('id') id: string) {
    return this.rankingService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update one ranking' })
  update(@Param('id') id: string, @Body() updateRankingDto: UpdateRankingDto) {
    return this.rankingService.update(id, updateRankingDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete one ranking' })
  remove(@Param('id') id: string) {
    return this.rankingService.remove(id);
  }
}
