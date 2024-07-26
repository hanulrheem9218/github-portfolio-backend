import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getBackendIntro(): string {
    return 'Github-Sync backend projects';
  }
}
