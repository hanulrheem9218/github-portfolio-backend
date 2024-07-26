import { Module } from '@nestjs/common';
//adding database sql server for my resume/project datas
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubsyncController } from './github-sync/githubsync.controller';
import { GithubsyncModule } from './github-sync/githubsync.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({envFilePath: ".env"}),MongooseModule.forRoot(process.env.MONGOOSE_URL), GithubsyncModule],
  controllers: [AppController, GithubsyncController],
  providers: [AppService],
})
export class AppModule {}
