import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResultService } from './result.service';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Result Api")
@Controller('result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @Post()
  @ApiOperation({ summary: 'create one result' })
  create(@Body() createResultDto: CreateResultDto) {
    return this.resultService.create(createResultDto);
  }

  @Get()
  @ApiOperation({ summary: 'find all results' })
  findAll() {
    return this.resultService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'find one result' })
  findOne(@Param('id') id: string) {
    return this.resultService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update one result' })
  update(@Param('id') id: string, @Body() updateResultDto: UpdateResultDto) {
    return this.resultService.update(id, updateResultDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete one result' })
  remove(@Param('id') id: string) {
    return this.resultService.remove(id);
  }
}
