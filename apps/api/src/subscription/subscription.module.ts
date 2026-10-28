import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Module({
    imports: [PrismaModule, AuthModule],
    controllers: [SubscriptionController],
    providers: [SubscriptionService, JwtAuthGuard],
    exports: [SubscriptionService],
})
export class SubscriptionModule { }
