import { Controller, Post, HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Controller('auth')
export class AuthController {
    jwtService;
    prisma;
    constructor(jwtService, prisma) {
        this.jwtService = jwtService;
        this.prisma = prisma;
    }
    @Post('login')
    async login(
    @Body()
    body) {
        const user = await this.prisma.user.findUnique({ where: { email: body.email } });
        if (!user) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }
        const isPasswordValid = await bcrypt.compare(body.password, user.password);
        if (!isPasswordValid) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }
        const token = this.jwtService.sign({ user_id: user.id });
        return { token };
    }
}
