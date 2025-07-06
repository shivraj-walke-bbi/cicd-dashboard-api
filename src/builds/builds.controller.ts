import { Controller, Post, Body, Get } from '@nestjs/common';
import { BuildsService } from './builds.service';

@Controller('builds')
export class BuildsController {
  constructor(private readonly buildsService: BuildsService) {}

  @Post()
  async addBuild(@Body() data: any) {
    return this.buildsService.addBuild(data);
  }

  @Get()
  async getBuilds() {
    return this.buildsService.getBuilds();
  }
}
