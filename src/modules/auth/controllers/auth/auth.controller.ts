import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../../auth/auth.service';
import { ApiPropertyExt } from '@odda-studio/base-crud-decorators';
import { Public } from '../../../../decorators/public';
import { UserBaseDto } from '../../../../../generated-source/controllers/user/dto/dto';
import { IUser } from '../../../../../generated-source/models/user.entity-model';

class SignUpDto {
  @ApiPropertyExt({ minLength: 4, type: String, nullable: false })
  username: string;

  @ApiPropertyExt({ type: String })
  email: string;

  @ApiPropertyExt({ type: String, nullable: true })
  password?: string;

  @ApiPropertyExt({ type: String, required: true, nullable: false })
  firstName: string;

  @ApiPropertyExt({ type: String, required: true, nullable: false })
  lastName: string;

  @ApiPropertyExt({ type: Date, required: true, nullable: false })
  birthDate: Date;
}

class LoginDataDto {
  @ApiPropertyExt({
    type: () => UserBaseDto,
  })
  user: UserBaseDto;
  @ApiPropertyExt()
  access_token: string;
}

class LoginDto {
  @ApiPropertyExt()
  username: string;
  @ApiPropertyExt()
  password: string;
}

class LoginResponseDto {
  @ApiPropertyExt({
    type: LoginDataDto,
  })
  data: LoginDataDto;
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
    type: LoginResponseDto,
  })
  @Post('login')
  async login(@Body() body: LoginDto) {
    const user = await this.authService.validateUser(
      body.username,
      body.password,
    );
    return { data: await this.authService.sign(user) };
  }

  @Public()
  @ApiBody({
    type: SignUpDto,
  })
  @ApiResponse({
    type: LoginResponseDto,
  })
  @Post('signup')
  async signUp(@Body() body: SignUpDto) {
    const user = await this.authService.signup({
      ...body,
    } as IUser);
    return { data: await this.authService.sign(user) };
  }

  @Get('me')
  @ApiResponse({
    type: UserBaseDto,
  })
  me(@Request() req) {
    const { iat, exp, ...user } = req.user;
    return { data: user };
  }
}
