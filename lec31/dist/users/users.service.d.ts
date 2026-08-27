import { Model, Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }, {}, User, "find", {}>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    addProduct(userId: Types.ObjectId, productId: Types.ObjectId): Promise<(import("mongoose").Document<unknown, {}, User, {}, import("mongoose").DefaultSchemaOptions> & User & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
