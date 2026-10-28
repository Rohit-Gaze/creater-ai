import { Module } from '@nestjs/common';
import { CreatorService } from './creator.service';
import { CreatorController } from './creator.controller';
import { SocialFetcherService } from './social-fetcher.service';
import { SocialFetcherController } from './social-fetcher.controller';
import { AuthModule } from '../auth/auth.module';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Module({
  imports: [AuthModule],
  providers: [CreatorService, SocialFetcherService, JwtAuthGuard],
  controllers: [CreatorController, SocialFetcherController],
  exports: [CreatorService],
})
export class CreatorModule {}
