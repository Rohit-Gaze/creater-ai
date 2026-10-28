import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { ChatStreamController } from './chat-stream.controller';
import { AIModule } from '../ai/ai.module';
import { ModerationModule } from '../moderation/moderation.module';
import { AnalyticsModule } from '../analytics/analytics.module';
import { MeterModule } from '../meter/meter.module';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Module({
  imports: [AIModule, ModerationModule, AnalyticsModule, MeterModule, PrismaModule, AuthModule],
  controllers: [ChatController, ChatStreamController],
  providers: [ChatService, JwtAuthGuard],
  exports: [ChatService],
})
export class ChatModule { }
