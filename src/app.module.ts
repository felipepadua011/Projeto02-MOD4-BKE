import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { SeguidoresModule } from './seguidores/seguidores.module';
import { SeguindoModule } from './seguindo/seguindo.module';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [
    UsuariosModule,
    PrismaModule,   
    AuthModule, SeguidoresModule, SeguindoModule, TweetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
