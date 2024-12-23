import { Controller, Get, Param, BadRequestException, Put, Body, Query, Delete } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getInvoices(@Query('user_id') user_id: number) {
    console.log("getInvoices called")
    return this.prisma.invoice.findMany({ where: { user_id } });
  }

  @Get(':id')
  async getInvoiceById(@Param('id') id: string): Promise<any> {
    // Convert string ID to integer
    const intId = parseInt(id, 10);

    // Validate if the ID is a valid integer
    if (isNaN(intId)) {
      throw new Error('Invalid ID provided, must be a valid integer');
    }

    // Fetch the first invoice matching the ID using prisma.findFirst
    const invoice = await this.prisma.invoice.findFirst({
      where: {
        id: intId, // Match the invoice ID
      },
    });

    if (!invoice) {
      throw new Error('Invoice not found');
    }

    return invoice;
  }

  // Delete an invoice by ID
  @Delete(':id')
  async deleteInvoice(@Param('id') id: string): Promise<any> {
    console.log('deleteInvoice called with id:', id);

    // Manually parse and validate the ID
    const intId = parseInt(id, 10);
    if (isNaN(intId)) {
      throw new BadRequestException('Invalid ID provided, must be a valid integer');
    }

    // Delete the invoice by its ID
    const deletedInvoice = await this.prisma.invoice.delete({
      where: {
        id: intId,
      },
    });

    return deletedInvoice;
  }
}
