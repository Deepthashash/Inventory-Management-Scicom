import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  types = ["TV","Mobile Phone"]
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private dialogRef: MatDialogRef<AddProductComponent>
    ) { }

    ProductAddForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      productName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      type: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      reOrderLevel: ['', Validators.required]
    });

    

  ngOnInit(): void {
  }

  clearForm(){
    this.ProductAddForm.reset();
  }

  addProduct(formData: Product){
    console.log(formData)
    this.productService.addProduct(formData).then(
      (res) => {
        location.reload();  
      }
    )
  }

}
