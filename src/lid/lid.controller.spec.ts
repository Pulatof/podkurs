import { Test, TestingModule } from '@nestjs/testing';
import { LidController } from './lid.controller';
import { LidService } from './lid.service';

describe('LidController', () => {
  let controller: LidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LidController],
      providers: [LidService],
    }).compile();

    controller = module.get<LidController>(LidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
