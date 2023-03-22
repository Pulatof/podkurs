import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { Branch } from './models/branch.model';


@Injectable()
export class BranchService {
  constructor(
    @InjectModel(Branch) private readonly branchRepo:typeof Branch
  ){}
  async create(createBranchDto: CreateBranchDto) {
    const branch = await this.branchRepo.create(createBranchDto)
    return branch
  }

  findAll() {
    return this.branchRepo.findAll({include:{all:true}})
  }

  async findOne(id: number) {
    const branch = await this.branchRepo.findOne({where:{id}})
    if (!branch){
      throw new BadRequestException('branch not found')
    }
    return branch
  }

  async update(id: number, updateBranchDto: UpdateBranchDto) {
    const branch = await this.branchRepo.findOne({where:{id}})
    if (!branch){
      throw new BadRequestException('branch not found')
    }
    const updatedBranch = await this.branchRepo.update(
      {...updateBranchDto},
      {where:{id}, returning:true})
      const response={
        message:'branch updated succesully',
        branch: updatedBranch[1][0]
      }
      return response
  }
  

  async remove(id: number) {
    const branch = await this.branchRepo.findOne({where:{id}})
    if (!branch){
      throw new BadRequestException('branch not found')
    }
    await this.branchRepo.destroy({where:{id}})
    const response={
      message:'branch removed succesfully',
      BranchID:id
    }
    return response
  }
  
}
