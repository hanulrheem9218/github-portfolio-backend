import { Module } from '@nestjs/common';
import { GithubsyncService } from './githubsync.service';
import { GithubsyncController } from './githubsync.controller';
import { MongooseModule } from '@nestjs/mongoose';
//schema data model
import { projectDataSchema } from './githubsync.model';

@Module({
  imports: [MongooseModule.forFeature([{name:'projectData',schema: projectDataSchema }])],
  controllers:[GithubsyncController],
  providers: [GithubsyncService],
})
export class GithubsyncModule {}
