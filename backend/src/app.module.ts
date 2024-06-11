import { Module } from '@nestjs/common';
import { RamenModule } from './ramen/ramen.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuditModule } from './audit/audit.module';

@Module({
  imports: [

    ConfigModule.forRoot(),

    MongooseModule.forRoot(
      `mongodb://${process.env.DB_HOSTS}/${process.env.DB_NAME}?replicaSet=${process.env.REPLICA_SET}`
    ),

    RamenModule,

    AuditModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
