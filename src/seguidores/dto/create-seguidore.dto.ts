import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateSeguidoreDto {

  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}


