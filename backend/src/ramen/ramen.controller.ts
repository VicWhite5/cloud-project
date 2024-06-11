import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { RamenService } from './ramen.service';
import { CreateRamanDto } from './dto/create-raman.dto';
import { UpdateRamanDto } from './dto/update-raman.dto';

@Controller('ramens')
export class RamenController {
  constructor(private readonly ramenService: RamenService) {}

  @Post()
  async create(@Body() createRamanDto: CreateRamanDto) {
    return this.ramenService.create(createRamanDto);
  }

  @Get()
  async findAll() {
    return this.ramenService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.ramenService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() updateRamanDto: UpdateRamanDto) {
    return this.ramenService.update(id, updateRamanDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.ramenService.remove(id);
  }
}
