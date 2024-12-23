import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import * as argon2 from 'argon2'; // Import argon2 for password hashing

@Controller('auth')
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    console.log("login called")
    console.log("recieved email: ", body.email)
    console.log("recieved password: ", body.password)
    const user = await this.prisma.user.findUnique({ where: { email: body.email } });
    if (!user) {
      throw new HttpException('Invalid email', HttpStatus.UNAUTHORIZED);
    }
    else {
      console.log("recieved valid email") 
    }

    // Use argon2 to compare the hashed password
    const isPasswordValid = await argon2.verify(user.password, body.password);
    if (!isPasswordValid) {
      throw new HttpException('Invalid password', HttpStatus.UNAUTHORIZED);
    }

    // Create JWT token after successful login
    const token = this.jwtService.sign({ user_id: user.id });

    console.log('token created')
    return { token };
  }
}
