import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './models/role.model';
import { Stuff } from 'src/stuff/models/stuff.model';
import { StuffRoles } from './models/stuff-role.model';

@Module({
  imports:[SequelizeModule.forFeature([Role, Stuff, StuffRoles])],
  controllers: [RoleController],
  providers: [RoleService],
  exports:[RoleService]
})
export class RoleModule {}
