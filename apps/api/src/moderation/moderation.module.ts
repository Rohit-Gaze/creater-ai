import { Module } from '@nestjs/common';
import { ModerationService } from './moderation.service';
import { ModerationController } from './moderation.controller';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Module({
  imports: [ConfigModule, AuthModule],
  providers: [ModerationService, ReportService, JwtAuthGuard],
  controllers: [ModerationController, ReportController],
  exports: [ModerationService, ReportService],
})
export class ModerationModule { }
