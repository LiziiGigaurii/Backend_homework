"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_schema_1 = require("./schema/product.schema");
const users_service_1 = require("../users/users.service");
let ProductsService = class ProductsService {
    productModel;
    usersService;
    constructor(productModel, usersService) {
        this.productModel = productModel;
        this.usersService = usersService;
    }
    async create(userId, createProductDto) {
        const user = await this.usersService.findOne(userId);
        const newProduct = await this.productModel.create({ ...createProductDto, user: user._id });
        await this.usersService.addProduct(user._id, newProduct._id);
        return newProduct;
    }
    findAll() {
        return this.productModel.find();
    }
    findByUser(userId) {
        if (!(0, mongoose_2.isValidObjectId)(userId))
            throw new common_1.BadRequestException('Invalid id');
        return this.productModel.find({ user: new mongoose_2.Types.ObjectId(userId) });
    }
    async findOne(id) {
        if (!(0, mongoose_2.isValidObjectId)(id))
            throw new common_1.BadRequestException('Invalid id');
        const product = await this.productModel.findById(id);
        if (!product)
            throw new common_1.BadRequestException('Product not found');
        return product;
    }
    async update(id, updateProductDto) {
        if (!(0, mongoose_2.isValidObjectId)(id))
            throw new common_1.BadRequestException('Invalid id');
        const updatedProduct = await this.productModel.findByIdAndUpdate(id, updateProductDto, {
            new: true,
        });
        if (!updatedProduct)
            throw new common_1.BadRequestException('Product not found');
        return updatedProduct;
    }
    async remove(id) {
        if (!(0, mongoose_2.isValidObjectId)(id))
            throw new common_1.BadRequestException('Invalid id');
        const deletedProduct = await this.productModel.findByIdAndDelete(id);
        if (!deletedProduct)
            throw new common_1.BadRequestException('Product not found');
        return deletedProduct;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_service_1.UsersService])
], ProductsService);
//# sourceMappingURL=products.service.js.map