import { Test, TestingModule } from '@nestjs/testing';
import { StudentLessonController } from './student_lesson.controller';
import { StudentLessonService } from './student_lesson.service';

describe('StudentLessonController', () => {
  let controller: StudentLessonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentLessonController],
      providers: [StudentLessonService],
    }).compile();

    controller = module.get<StudentLessonController>(StudentLessonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
