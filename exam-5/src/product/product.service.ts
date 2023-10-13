import { Injectable, NotFoundException } from '@nestjs/common';
import {Product} from './product.module';

@Injectable()
export class ProductService {
        private product: Product[] = [];

    insertProduct(title: string, description:string, price: number){
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, description, price);
        this.product.push(newProduct)
        return prodId;
    }

    getProduct(){
        return [...this.product];
    }

    getSingleProduct(productId: string){
        const product = this.findProduct(productId)[0];
        return {...product};
    }

    updateProduct(productId: string, title: string, description: string, price: number){
        const [product, index]= this.findProduct(productId);
        const updateProduct = {...product};
        if(title){
            updateProduct.title = title;
        }
        if(description){
            updateProduct.description = description;
        }
        if(price){
            updateProduct.price = price;
        }
        this.product[index] = updateProduct;
    } 
    deleteProProduct(prodId: string){
            const index =this.findProduct(prodId)[1];
            this.product.splice(index, 1);
    }
        private findProduct(id: string):[Product, number]{
            const productIndex = this.product.findIndex((prod) => prod.id == id);
            const product = this.product[productIndex];
        if (!product){
            throw new NotFoundException('Could not find product.');
          }
          return [product, productIndex];
        }
}
