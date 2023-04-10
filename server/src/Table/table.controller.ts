import { Controller, Get } from '@nestjs/common';

@Controller('table')
export class TableController {
  @Get()
  getTables() {}
}
