import { Test, TestingModule } from '@nestjs/testing';
import { LidStatusController } from './lid_status.controller';
import { LidStatusService } from './lid_status.service';

describe('LidStatusController', () => {
  let controller: LidStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LidStatusController],
      providers: [LidStatusService],
    }).compile();

    controller = module.get<LidStatusController>(LidStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
