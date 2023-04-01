import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../../../generated-source/controllers/user/services/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { IUser } from "../../../../generated-source/models/user.entity-model";

const saltOrRounds = 10;

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.repository().findOne({
      where: { username },
    });

    if (user !== null) {
      const isMatch = await compare(password, user.password);
      if (isMatch) {
        const { password, ...result } = user;
        return result;
      }
      throw new UnauthorizedException();
    }

    return user;
  }

  async sign(user: Omit<IUser, 'password'>) {
    const payload = { ...user };
    return {
      access_token: this.jwtService.sign(payload),
      user: user
    };
  }
}
