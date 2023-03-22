import { Test, TestingModule } from '@nestjs/testing';
import { ReasonLidController } from './reason_lid.controller';
import { ReasonLidService } from './reason_lid.service';

describe('ReasonLidController', () => {
  let controller: ReasonLidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReasonLidController],
      providers: [ReasonLidService],
    }).compile();

    controller = module.get<ReasonLidController>(ReasonLidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
