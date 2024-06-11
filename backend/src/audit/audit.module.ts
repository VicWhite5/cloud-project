import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Audit, AuditSchema } from './entities/audit.entity';
import { AuditService } from './audit.service';

@Module({
    providers: [AuditService],
    imports: [
        MongooseModule.forFeature([
            {
                name: Audit.name,
                schema: AuditSchema
            }
        ])
    ],
    exports: [AuditService]
})
export class AuditModule {}
