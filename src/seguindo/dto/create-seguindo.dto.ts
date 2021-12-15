import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateSeguindoDto {

  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}
