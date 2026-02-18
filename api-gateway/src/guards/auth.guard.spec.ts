import { Reflector } from '@nestjs/core';
import { JwtAuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  it('should be defined', () => {
    const reflector = new Reflector();
    expect(new JwtAuthGuard(reflector)).toBeDefined();
  });
});
