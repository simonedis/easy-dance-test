import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { ApiBody, ApiTags, ApiResponse } from '@nestjs/swagger';
import { AuthService } from '../../auth/auth.service';
import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { Public } from '../../../../decorators/public';
import { UserBaseDto } from "../../../../../generated-source/controllers/user/dto/dto";

class LoginDto {
  @ApiPropertyExt()
  username: string;
  @ApiPropertyExt()
  password: string;
}

class LoginResponseDto {
  @ApiPropertyExt({
    type: () => UserBaseDto
  })
  user: UserBaseDto;
  @ApiPropertyExt()
  access_token: string;
}

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @ApiBody({
    type: LoginDto,
  })
  @ApiResponse({
    type: LoginResponseDto
  })
  @Post('login')
  async login(@Body() body: LoginDto) {
    const user = await this.authService.validateUser(
      body.username,
      body.password,
    );
    return { data: await this.authService.sign(user) };
  }

  @Get('me')
  @ApiResponse({
    type: UserBaseDto
  })
  me(@Request() req) {
    const { iat, exp, ...user } = req.user;
    return { data: user };
  }
}
