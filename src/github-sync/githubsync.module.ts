import { Module } from '@nestjs/common';
import { GithubsyncService } from './githubsync.service';
import { GithubsyncController } from './githubsync.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature()],
  controllers:[GithubsyncController],
  providers: [GithubsyncService],
})
export class GithubsyncModule {}
