import { PartialType } from '@nestjs/mapped-types';
import { CreateRamanDto } from './create-raman.dto';

export class UpdateRamanDto extends PartialType(CreateRamanDto) {}
