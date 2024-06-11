import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Audit } from './entities/audit.entity';
import { Model } from 'mongoose';

import { v4 as uuid } from 'uuid';

@Injectable()
export class AuditService {
  constructor(
    @InjectModel(Audit.name)
    private readonly auditModel: Model<Audit>,
  ) {}

  async saveAudit(action: string, success: boolean) {
    try {
      await this.auditModel.create({
        id: uuid(),
        action,
        success,
        container: process.env.CONTAINER
      });
    } catch (error) {
      console.log('The save of the audit have failed with the next error:');
      console.log(error);
    }
  }
}
