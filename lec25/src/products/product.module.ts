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
        // eskide logavs
        consumer
            .apply(expressMiddleware)
            .forRoutes(productsController)
 
        // es browsers blokavs
        consumer
            .apply(UserAgent)
            .forRoutes(productsController)
 
        // es rols amowmebs
        consumer
            .apply(RoleMiddleware)
            .forRoutes(
                { path: 'products', method: RequestMethod.POST },
                { path: 'products/:id', method: RequestMethod.PATCH },
                { path: 'products/:id', method: RequestMethod.DELETE },
            )
    }
}
 