import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../service/auth.service';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error('JWT_SECRET is not defined');
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    });
  }

  async validate(payload: any) {
    if (!payload) {
      throw new UnauthorizedException('Invalid Token Payload');
    }

    const user = await this.authService.validateJwtToken(payload.token);

    if (!user) {
      throw new UnauthorizedException();
    }

    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}
