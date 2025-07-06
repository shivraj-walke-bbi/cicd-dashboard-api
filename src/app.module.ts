import { Module } from '@nestjs/common';
import { BuildsModule } from './builds/builds.module';

@Module({
  imports: [BuildsModule],
})
export class AppModule {}
