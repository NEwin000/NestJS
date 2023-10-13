import { Controller, Get, Post, Body, Param, Patch, Delete} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService){}
    
    @Post()
    addProduct(
        @Body('title') prodTitle: string, 
        @Body('description') prodDescription: string,
        @Body('price') prodPrice: number,
        ) {
      const generateId = this.productService.insertProduct(
        prodTitle, 
        prodDescription, 
        prodPrice,
        );
          return {id: generateId};  
    }

    @Get()
    getAllProcuct(){
        return this.productService.getProduct();
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string,){
        return this.productService.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string,
        @Body('description') prodDescription: string,
        @Body('price') prodPrice: number,
    ){
        this.productService.updateProduct(prodId, prodTitle, prodDescription, prodPrice)
        return null;
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId: string,){
        this.productService.deleteProProduct(prodId);
        return null;
    }
}
