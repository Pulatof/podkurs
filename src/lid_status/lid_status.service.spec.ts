import { Test, TestingModule } from '@nestjs/testing';
import { LidStatusService } from './lid_status.service';

describe('LidStatusService', () => {
  let service: LidStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LidStatusService],
    }).compile();

    service = module.get<LidStatusService>(LidStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
