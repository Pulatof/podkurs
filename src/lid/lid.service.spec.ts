import { Test, TestingModule } from '@nestjs/testing';
import { LidService } from './lid.service';

describe('LidService', () => {
  let service: LidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LidService],
    }).compile();

    service = module.get<LidService>(LidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
