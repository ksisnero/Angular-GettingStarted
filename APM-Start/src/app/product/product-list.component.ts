import { OnInit, Component } from "@angular/core";

import { ProductService } from "./product.service";
import { IProduct } from "./product";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidt: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = '';
    filteredProducts: IProduct[];
    products: IProduct[];

    _listFilter = '';
    get listFilter(): string { 
        return this._listFilter;
    } 
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    constructor(private productService: ProductService) { }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List ' + message;
    }

    performFilter(filterby: string): IProduct[] {
        filterby = filterby.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterby) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(products => {
            this.products = products;
            this.filteredProducts = this.products;
        }),
        error => this.errorMessage = <any>error;
    }
}