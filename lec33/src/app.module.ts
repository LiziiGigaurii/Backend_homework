import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { MongooseModule } from '@nestjs/mongoose';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    LoggerModule.forRoot({
      pinoHttp: {
        level: process.env.LOG_LEVEL || 'info',
        quietReqLogger: true,
        customSuccessMessage: (req, res) => `${req.method} ${req.url} ${res.statusCode}`,
        customErrorMessage: (req, res) => `${req.method} ${req.url} ${res.statusCode}`,
        serializers: {
          req: (req) => ({
            method: req.method,
            url: req.url
          }),
          res: (res) => ({
            statusCode: res.statusCode
          }),
        },
        transport: process.env.NODE_ENV !== 'production'
          ? {
                target: 'pino-pretty',
                options: {
                colorize: true,
                singleLine: true,
                translateTime: 'SYS:standard',
                ignore: 'pid, hostname, req, res, responseTime',
              },
            }
          : undefined,
      }
    }),
    MongooseModule.forRoot(process.env.MONGO_URL!),
    UsersModule,
    AuthModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
