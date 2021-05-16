import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id:number;
  types = ["TV","Mobile Phone"]

  ProductAddForm = this.formBuilder.group({
    id: ['', [Validators.required]],
    productName: ['', [Validators.required]],
    description: ['', [Validators.required]],
    type: ['', [Validators.required]],
    price: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
    reOrderLevel: ['', Validators.required]
  });

  constructor(    
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) data:any) {
      this.id = data.id;
    }

  ngOnInit(): void {
    this.productService.getProductById(this.id).subscribe(
      (res) => {
        this.ProductAddForm.controls.id.setValue(res.id);
        this.ProductAddForm.controls.productName.setValue(res.productName);
        this.ProductAddForm.controls.description.setValue(res.description);
        this.ProductAddForm.controls.type.setValue(res.type);
        this.ProductAddForm.controls.price.setValue(res.price);
        this.ProductAddForm.controls.quantity.setValue(res.quantity);
        this.ProductAddForm.controls.reOrderLevel.setValue(res.reOrderLevel);
      }
    )
  }

  updateProduct(formData: Product){
    console.log(formData);
    this.productService.updateProduct(this.id,formData).then(
      (res) => {
        location.reload();
      }
    )
  }

}
