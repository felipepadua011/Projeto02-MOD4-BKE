```html
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
```

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

```html
  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
```

```html
<p align="center">
```

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Cria????o do projeto utilizando o NESTJS, um dos melhores frameworks para se trabalhar, ele utiliza Typescript, a linguagem de programa????o que vamos utilizar e pode ser executado em frameworks HTTP como expressJS ou Fastify. Tamb??m utilizando a integra????o do Prisma e Postgresql.

## Installation

Para iniciar com o NestJS devemos instalar a NestJS CLI de forma global:

```bash
npm i -g @nestjs/cli
```

Crie e abra uma pasta no VSCode onde voc?? deseja que o reposit??rio que vamos criar, fique armazenado. Para criar um novo projeto utilize o seguinte comando e onde est?? `project-name` mude para o nome do seu projeto.

```basic
nest new project-name
```

Logo ap??s ele vai perguntar qual gerencador de pacotes queremos usar, pode utilizar o da sua prefer??ncia, nesse exemplo utilizaremos o `npm`.

Neste momento, foi criado uma nova pasta com o seu projeto, voc?? deve garantir que a pasta que foi criada, esteja aberta no VSCode:

```basic
cd "my-nest-project"
```

Para testar se o seu projeto est?? rodando, entre com o comando:

```bash
npm run start:dev
```

Ele dever?? por padr??o em http://localhost:3000

Quando rodamos esse comando, automaticamente o NestJS gera a pasta `dist`, onde cont??m arquivos `.js`, `.map` e `.d.ts.

Explorando um pouco a estrutura do NestJS, percebemos que temos 5 arquivos que foram gerados automaticamente dentro da pasta src: 

![img](https://blueedtech.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Mj_r__f7dzSt2HUbwjg%2Fuploads%2FSzHtCS9EudOxrUvSywZr%2Fimg10.PNG?alt=media&token=9e3d8e21-772e-4992-b3e2-90260bacd047)

S??o eles: 

- app.controller.spec.ts, 
- app.controller.ts, 
- app.module.ts, 
- app.service.ts 
- E dentro dessa aplica????o temos o arquivo mais importante que ?? o "cora????o" do projeto o main.ts.

## Este Projeto Cont??m:

???                             `[Postgres+ NestJS + TypeScript + Prisma + JWT]` 

O projeto consiste em criar uma API que servir?? para controle do Twitter, onde o usurio postar?? tweets e ter?? seguidores.

Respeitando o diagrama, os alunos devem desenvolver o schema prisma para montar o banco postgres, toda intera????o das tabelas ?? one to many.

 O JWT nesse projeto deve apenas servir de autentica????o, ou seja apenas fornecendo um token valido na aplica????o.

 Em nossos arquivos DTO ?? necess??rio que realizemos as valida????es por meio dos @Decorators.

Para este projeto foram criadas 4 pastas distintas dentro da pasta `src` s??o elas:

- Pasta seguidores.
- Pasta seguindo.
- Pasta tweets.
- Pasta usuario 

Para cria????o das pastas ?? necessario rodar o comando `nest g resource-nome da pasta` para cria????o de  cada uma delas, exemplo:

```javascript
nest g resource usuario
```

Com esse comando havera a cria????o da pasta no caso (usuario) e dentro dela ter?? todos os demais arquivos e pastas necessario para rodar o projeto desta pasta.

Rode o mesmo comando para cria????o das outras tr??s pastas.

## Algumas Valida????es Importantes

Rode estes dois comandos:

```bash
npm i --save class-validator class-transformer
```

```bash
npm i --save helmet
```

 E fa??a as altera????es necessarias para que seu codigo fique desta maneira:

```javascript
import { ValidationPipe } from '@nestjs/common'; //Para o class-validator funcionar
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet'; // Para o helmet funcionar

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //Para funcionar o class-validator
  app.use(helmet()); //Para funcionar o helmet
  await app.listen(3000);
}
bootstrap();

```

## Em Geral DTO:

**DTO** ( *Data Transfer Object* ) ?? usado para analisar e validar os dados da solicita????o. DTOs sempre s??o usados com **controladores** . ?? um cen??rio comum quando o servidor da web deve validar os dados antes do processamento. O DTO pode otimizar e automatizar esse processo.

## Decoradores para valida????o

H?? um conjunto de decoradores para valida????o de dados conveniente. Se voc?? tiver necessidades especiais de valida????o, voc?? sempre pode implementar seu pr??prio decorador (leia mais em avan??ado). Mas decoradores personalizados podem ser implementados. Leia em Avan??ado sobre isso.

???                                               `https://odi.gitbook.io/core/basics/dto`

## Prisma

Para que o prisma podesse ser utilizado instalei as seguintes dependencias:

```bash
npm install prisma --save-dev
```

```basic
npx prisma init
```

```bash
npm install @prisma/client
```

Este comando ?? para gerar a tabela do schema.prisma no banco do Postgre :

```bash
npx prrisma generate
```

Este ?? para dar um push na tabela:

```bash
npx prisma db push
```

Este comando ?? para testar se tudo esta certo e funcionando corretamente no prisma estudio ainda na vers??o beta:

```
npx prisma studio
```

## Rotas

**Temos 4 rotas principais:**

<img src="https://cdn.discordapp.com/attachments/895482892627607602/927026551491547166/post-usuario.png" alt="post-usuario" style="zoom:60%;" />

<img src="https://cdn.discordapp.com/attachments/895482892627607602/927026554746314822/tweets.png" alt="post-usuario" style="zoom:60%;" />

<img src="https://cdn.discordapp.com/attachments/895482892627607602/927026552737259570/seguidores.png" alt="post-usuario" style="zoom:60%;" />

<img src="https://cdn.discordapp.com/attachments/895482892627607602/927026553240571935/seguindo.png" alt="post-usuario" style="zoom:60%;" />

**Dentro de cada rota temos um CRUD completo criado com os Decorators:**

 `@POst()` 	**Cada uma das rotas principais tem o seu:**

```javascript
 @Post()
  create(@Body() createSeguidoreDto: CreateSeguidoreDto) {
    return this.seguidoresService.createPrisma(createSeguidoreDto);
  }
```

```javascript
@Post()
  create(@Body() createSeguindoDto: CreateSeguindoDto) {
    return this.seguindoService.createPrisma(createSeguindoDto);
  }

```

```javascript
@Post()
  create(@Body() createTweetDto: CreateTweetDto) {
    return this.tweetsService.createPrisma(createTweetDto);
  }
```

```javascript
 @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }
```

 `@Patch(':id') ` 	**Cada uma das rotas principais tem o seu:**

```javascript
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeguidoreDto: UpdateSeguidoreDto) {
    return this.seguidoresService.updatePrisma(+id, updateSeguidoreDto);
  }
```

```javascript
@Patch(':id')
  update(@Param('id') id: string, @Body() updateSeguindoDto: UpdateSeguindoDto) {
    return this.seguindoService.updatePrisma(+id, updateSeguindoDto);
  }
```

```javascript
@Patch(':id')
  update(@Param('id') id: string, @Body() updateTweetDto: UpdateTweetDto) {
    return this.tweetsService.updatePrisma(+id, updateTweetDto);
  }
```

```javascript
@Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateUsuarioDto) {
    return this.usuariosService.updatePrisma(+id, updateFilmeDto);
  }
```

`@Delete`()  	**cada rota principal tem o seu:**

```javascript
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguidoresService.removePrisma(+id);
  }
```

```javascript
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguindoService.removePrisma(+id);
  }
```

```javascript
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.tweetsService.removePrisma(+id);
  }
```

```javascript
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.removePrisma(+id);
  }
```

`@Get `() 	  ***cada rota principal tem o seu:***

```javascript
@Get()
  findAll() {
    return this.seguidoresService.findAllPrisma();
  }
```

```javascript
 @Get()
  findAll() {
    return this.seguindoService.findAllPrisma();
  }
```

```javascript
@Get()
  findAll() {
    return this.tweetsService.findAllPrisma();
  }
```

```javascript
 @Get()
  findAll() {
    return this.usuariosService.findAllPrisma();
  }
```

`@Get(':id')`  ***cada rota principal tem o seu:***

```javascript
@Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguidoresService.findOnePrisma(+id);
  }
```

```javascript
@Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguindoService.findOnePrisma(+id);
  }
```

```javascript
 @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tweetsService.findOnePrisma(+id);
  }
```

```javascript
 @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOnePrisma(+id);
  }
```

**Post  rota** `/usuarios` , **no Thunder:**	

<img src="https://cdn.discordapp.com/attachments/895482892627607602/927026551491547166/post-usuario.png" alt="post-usuario" style="zoom:60%;" />		 

- ???	**Usado para adicionar um usuario no banco de dados local.**
- ???    **Para adicionar um usuario dentro do banco, necessita passar todos os dados com suas devidas informa????es a seguir no exemplo:( id, createdAt e updatedAt n??o precisa passar, pois s??o autoincrement )**

```javascript
  "email":         //String
  "senha":         //String
  "nome":          //String 
  "imagem":        //String?
  "bio":           //String 
  "nascimento":    //String 
```

<img src="https://cdn.discordapp.com/attachments/895482892627607602/927026551105650718/postthamy.png" alt="post-usuario" style="zoom:60%;" />



**Post  rota** `/tweets` , **no Thunder:**

<img src="https://cdn.discordapp.com/attachments/895482892627607602/927026554746314822/tweets.png" alt="tweets" style="zoom:60%;" />			 

- ???	**Usado para postar uma mensagem.**
- ???    **Para adicionar um tweets, necessita passar todos os dados com suas devidas informa????es a seguir no exemplo:**

```javascript
  "texto":         //String
  "emoji":         //String? 
  "curtidas":      //Number
  "usuarioid":     //Number 
```

![tweetsp](https://cdn.discordapp.com/attachments/895482892627607602/927026554939265074/tweetsp.png)

**Post  rota** `/seguidores` , **no Thunder:**

![seguidores](https://cdn.discordapp.com/attachments/895482892627607602/927026552737259570/seguidores.png)		 

- ???	**Usado para adicionar um seguidor ao usuario ja existente no banco.**
- ???    **Para adicionar um seguidor, necessita passar o ID do usuario ja existente exemplo:**

```javascript
 "usuarioid": 3,           //Number
```

![seguidoresp](https://cdn.discordapp.com/attachments/895482892627607602/927026553035046913/seguidoresp.png)

**Post  rota** `/seguindo` , **no Thunder:**	

![seguindo](https://cdn.discordapp.com/attachments/895482892627607602/927026553240571935/seguindo.png)		 

- ???	**Usado para informar quem o usuario esta seguindo** 
- ???    **Para adicionar quem o usuario esta seguindo, necessita passar o ID do usuario ja existente, exemplo:**

```javascript
 "usuarioid": 3,           //Number
```

![seguindop](https://cdn.discordapp.com/attachments/895482892627607602/927026553462874132/seguindop.png)

* **Todos os `id` s??o autoincrement (criado sozinho, n??o precisa passar)**



## JWT

Para que o jwt possa ser iniciado, fazer a cria????o manual da pasta `auth` dentro de `src`.

Este comando cria uma nova pasta e dentro dela, o novo AuthModule. Al??m disso, este m??dulo ?? importado por padr??o no AppModule.

```bash
nest g m auth
```

Este comando cria a classe AuthService e fornece automaticamente este servi??o dentro do AuthModule.

```bash
nest g s auth
```

Este comando cria a classe AuthController e a adiciona automaticamente ?? propriedade dos controladores no AuthModule.

```bash
nest g c auth
```

A aplica????o agora est?? pronta para registrar usu??rios e autentic??-los com o JWT.



## SWAGGER

O Swagger ?? uma ferramenta que facilita os testes de sua api.

Para come??ar a implementar ele em sua api, tem de usar:

```bash
npm install --save @nestjs/swagger swagger-ui-express
```

Ap??s isso, abra a pasta `main.ts` e adicione as seguintes informa????es:

```bash
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Api')
    .setDescription('Api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  // -> Esse "api" ?? o nome que ser?? passado na url para usar o swagger.

  await app.listen(3000);
}
bootstrap();
```

Ap??s isso, apenas inicie seu projeto, utilizando:

```bash
npm run start:dev
```

Assim que for iniciada a sua api, basta entrar em `http://localhost:3000/api/` -> o "api" ?? configurado no `main.ts` caso queria mudar basta alterar onde foi passado logo a cima.

```bash
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Api')
    .setDescription('Api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  // -> Esse "api" ?? o nome que ser?? passado na url para usar o swagger.

  await app.listen(3000);
}
bootstrap();
```

<img src="https://cdn.discordapp.com/attachments/478608140993167360/926939969661042749/unknown.png" alt="swagger" style="zoom:60%;" />		

Caso fique assim, tudo pronto, seu swagger est?? rodando perfeitamente!!



## Trabalho Realizado em Dupla:

###  Felipe Pereira de Padua  ->  Entre em contato por: 

**`Email:`**  fpadua18@gmail.com

### **`Instagram:`**  www.instagram.com/padua.felipe/

### Wellington Nascimento ->  Entre em contato por: 

**`Email:`** wellingtonnascimento3@outlook.com

### **`Instagram:`**  www.instagram.com/wetto_nascimento/

#### Esperamos ter ajudado na compreens??o b??sica de como funciona este projeto e o que consta em suas dependencias internas.

