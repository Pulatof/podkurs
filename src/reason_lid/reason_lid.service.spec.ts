import { Test, TestingModule } from '@nestjs/testing';
import { ReasonLidService } from './reason_lid.service';

describe('ReasonLidService', () => {
  let service: ReasonLidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReasonLidService],
    }).compile();

    service = module.get<ReasonLidService>(ReasonLidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
