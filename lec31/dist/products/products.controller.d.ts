import type { Request } from 'express';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(request: Request & {
        userId: string;
    }, createProductDto: CreateProductDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/product.schema").Product, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/product.schema").Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/product.schema").Product, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/product.schema").Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, import("./schema/product.schema").Product, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/product.schema").Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("./schema/product.schema").Product, "find", {}>;
    findByUser(userId: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/product.schema").Product, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/product.schema").Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, import("./schema/product.schema").Product, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/product.schema").Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, import("./schema/product.schema").Product, "find", {}>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/product.schema").Product, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/product.schema").Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/product.schema").Product, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/product.schema").Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/product.schema").Product, {}, import("mongoose").DefaultSchemaOptions> & import("./schema/product.schema").Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
}
