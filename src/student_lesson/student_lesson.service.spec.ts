import { Test, TestingModule } from '@nestjs/testing';
import { StudentLessonService } from './student_lesson.service';

describe('StudentLessonService', () => {
  let service: StudentLessonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentLessonService],
    }).compile();

    service = module.get<StudentLessonService>(StudentLessonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
