import { Module } from '@nestjs/common';
import { JwtStrategy } from './local-strategy/local-strategy.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './controllers/auth/auth.controller';
import { UserModule } from '../../../generated-source/controllers/user/user.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
  providers: [JwtStrategy, AuthService],
  imports: [
    UserModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '60000s' },
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
