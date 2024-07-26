import { Test, TestingModule } from '@nestjs/testing';
import { GithubsyncService } from './githubsync.service';

describe('GithubsyncService', () => {
  let service: GithubsyncService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubsyncService],
    }).compile();

    service = module.get<GithubsyncService>(GithubsyncService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
