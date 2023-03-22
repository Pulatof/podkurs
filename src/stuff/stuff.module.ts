import { Module } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { StuffController } from './stuff.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Stuff } from './models/stuff.model';
import { Role } from 'src/role/models/role.model';
import { JwtModule } from '@nestjs/jwt';
import { StuffRoles } from 'src/role/models/stuff-role.model';
import { RoleModule } from 'src/role/role.module';

@Module({
  imports:[SequelizeModule.forFeature([Stuff, Role, StuffRoles]), RoleModule, JwtModule.register({
  })],
  controllers: [StuffController],
  providers: [StuffService],
  exports:[JwtModule, StuffService]
})
export class StuffModule {}
