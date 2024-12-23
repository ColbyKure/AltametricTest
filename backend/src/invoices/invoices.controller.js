import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
@Controller('invoices')
export class InvoicesController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    @Get()
    async getInvoices(
    @Query('user_id')
    user_id) {
        return this.prisma.invoice.findMany({ where: { user_id } });
    }
    @Get(':id')
    async getInvoiceById(
    @Param('id')
    id) {
        return this.prisma.invoice.findUnique({ where: { id } });
    }
    @Post()
    async createInvoice(
    @Body()
    body) {
        return this.prisma.invoice.create({ data: body });
    }
    @Patch(':id')
    async updateInvoice(
    @Param('id')
    id, 
    @Body()
    body) {
        return this.prisma.invoice.update({ where: { id }, data: body });
    }
    @Delete(':id')
    async deleteInvoice(
    @Param('id')
    id) {
        return this.prisma.invoice.delete({ where: { id } });
    }
}
