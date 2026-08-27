import { Model, Types } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schema/product.schema';
import { UsersService } from '../users/users.service';
export declare class ProductsService {
    private productModel;
    private usersService;
    constructor(productModel: Model<Product>, usersService: UsersService);
    create(userId: string, createProductDto: CreateProductDto): Promise<import("mongoose").Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, Product, "find", {}>;
    findByUser(userId: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, Product, "find", {}>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import("mongoose").Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
}
