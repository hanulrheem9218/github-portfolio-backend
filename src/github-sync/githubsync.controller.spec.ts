import { Test, TestingModule } from '@nestjs/testing';
import { GithubsyncController } from './githubsync.controller';
//test cases for github controller api.
describe('GithubsyncController', () => {
  let controller: GithubsyncController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubsyncController],
    }).compile();

    controller = module.get<GithubsyncController>(GithubsyncController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
