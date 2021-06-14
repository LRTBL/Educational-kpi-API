import { IsString, IsOptional } from 'class-validator';

export class CodeCountryDto {
  @IsString()
  @IsOptional()
  readonly ISO_2?: string;

  @IsString()
  @IsOptional()
  readonly ISO_3?: string;
}
