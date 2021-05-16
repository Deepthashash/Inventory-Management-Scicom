import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  isLoading = true;
  displayedColumns: string[] = ['id', 'productName', 'type','description', 'price', 'quantity','reOrderLevel', 'action'];
  dataSource = this.products;
  name = new FormControl('');

  constructor(    
    private formBuilder: FormBuilder,
    private productService: ProductService,    
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (result) => {
        this.isLoading = false;
        this.products = result;
        console.log(this.products);
        this.dataSource = this.products;
      }

    );
  } 

  onEdit(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {id};
    this.dialog.open(EditProductComponent, dialogConfig);
  }

  onDelete(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {id};
    this.dialog.open(DeleteProductComponent, dialogConfig);
  }

  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    this.dialog.open(AddProductComponent, dialogConfig);
  }

  // search(keyWord: any){
  //   this.products.filter(pro => pro.productName.toLowerCase == keyWord);
  // }

  search(searchText: string):void{
    if(searchText == "" || searchText == null){
      this.dataSource = this.products;
    }
    searchText = searchText.toLowerCase();
    var temp = this.products.filter(res => res.productName.toLowerCase().includes(searchText));
    this.dataSource = temp;
  }
}
