import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { LidModule } from './lid/lid.module';
import { TargetModule } from './target/target.module';
import { ReasonLidModule } from './reason_lid/reason_lid.module';
import { LidStatusModule } from './lid_status/lid_status.module';
import { StageModule } from './stage/stage.module';
import { PaymentModule } from './payment/payment.module';
import { StudentModule } from './student/student.module';
import { GroupModule } from './group/group.module';
import { BranchModule } from './branch/branch.module';
import { LessonModule } from './lesson/lesson.module';
import { StudentLessonModule } from './student_lesson/student_lesson.module';
import { StuffModule } from './stuff/stuff.module';
import { Stuff } from './stuff/models/stuff.model';
import { Target } from './target/models/target.model';
import { StudentLesson } from './student_lesson/models/student_lesson.model';
import { Student } from './student/models/student.model';
import { Stage } from './stage/models/stage.model';
import { ReasonLid } from './reason_lid/models/reason_lid.model';
import { Payment } from './payment/models/payment.model';
import { LidStatus } from './lid_status/models/lid_status.model';
import { Lid } from './lid/models/lid.model';
import { Lesson } from './lesson/models/lesson.model';
import { Group } from './group/models/group.model';
import { Branch } from './branch/models/branch.model';
import { RoleModule } from './role/role.module';
import { Role } from './role/models/role.model';
import { StuffRoles } from './role/models/stuff-role.model';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env`, isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [
        Stuff,
        Target,
        StudentLesson,
        Role,
        Student,
        Stage,
        ReasonLid,
        Payment,
        LidStatus,
        Lid,
        Lesson,
        Group,
        Branch,
        StuffRoles,
      ],
      autoLoadModels: true,
      logging: false,
    }),
    LidModule,
    TargetModule,
    ReasonLidModule,
    LidStatusModule,
    StageModule,
    PaymentModule,
    StudentModule,
    GroupModule,
    BranchModule,
    LessonModule,
    StudentLessonModule,
    StuffModule,
    RoleModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
