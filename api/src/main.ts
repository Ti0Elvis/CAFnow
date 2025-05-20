import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/app.module";
import { FastifyAdapter } from "@nestjs/platform-fastify";
import type { NestFastifyApplication } from "@nestjs/platform-fastify";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ trustProxy: true }),
  );

  await app.listen(process.env.PORT ?? 9000);
}

void bootstrap();

/*
  Comments:
  We use NestJS with Fastify but use Express types for convenience.
*/
