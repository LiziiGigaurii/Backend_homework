import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common'
import { productService } from './product.service';
import { productsController } from './product.controller';
import  { UserAgent } from '../../middleware/browser.middleware';
import { RoleMiddleware } from '../../middleware/role.middleware';
import { expressMiddleware } from '../../middleware/express.middleware';

@Module({
    controllers: [productsController],
    providers: [productService]
})

export class ProductModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(expressMiddleware, UserAgent, RoleMiddleware)
            .forRoutes({ path: 'products*', method: RequestMethod.ALL })
    }
}