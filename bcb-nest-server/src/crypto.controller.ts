import { Get, Controller } from '@nestjs/common';
import { CryptoService } from './crypto.service';

@Controller('cryptocurrency')
export class CryptoController {
  constructor(private readonly CryptoService: CryptoService) {}

  @Get()
  async root(): Promise<object> {
    const response = await this.CryptoService.bcbCrypto();
    return response;
  }
}
