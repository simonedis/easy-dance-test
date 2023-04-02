import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../../../generated-source/controllers/user/services/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { IUser } from '../../../../generated-source/models/user.entity-model';
import { RoleService } from '../../../../generated-source/controllers/role/services/role.service';
import { BaseRequest } from '@odda-studio/base-crud';

const saltOrRounds = 10;

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.repository().findOne({
      where: { username },
      relations: {
        roles: true,
      },
    });

    if (user !== null) {
      const isMatch = await compare(password, user.password);
      if (isMatch) {
        const { password, ...result } = user;
        return result;
      }
      throw new UnauthorizedException();
    }
    throw new UnauthorizedException();
  }

  async sign(user: Omit<IUser, 'password'>) {
    const payload = { ...user };
    return {
      access_token: this.jwtService.sign(payload),
      user: user,
    };
  }

  async signup(user: IUser) {
    const userRole = await this.roleService.findOne({
      name: 'USER',
    });
    const result = await this.userService.create(
      user,
      new BaseRequest<IUser>(),
    );
    result.roles = [userRole];
    await this.userService.repository().save(result);
    return result;
  }
}
