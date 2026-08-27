import mongoose from 'mongoose';
export declare class User {
    name: string;
    age: number;
    email: string;
    products: mongoose.Types.ObjectId[];
}
export declare const userSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, any, any, User>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, User, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<User & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, {
    name?: mongoose.SchemaDefinitionProperty<string, User, mongoose.Document<unknown, {}, User, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    age?: mongoose.SchemaDefinitionProperty<number, User, mongoose.Document<unknown, {}, User, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    email?: mongoose.SchemaDefinitionProperty<string, User, mongoose.Document<unknown, {}, User, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    products?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId[], User, mongoose.Document<unknown, {}, User, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & mongoose.HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, User>;
