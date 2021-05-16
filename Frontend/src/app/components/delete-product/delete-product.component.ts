import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  id:number;
  constructor(
    private productService: ProductService,
    private dialogRef: MatDialogRef<DeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) data:any) {
      this.id = data.id;
    }

  ngOnInit(): void {
  }

  delete(){
    this.productService.deleteProduct(this.id).subscribe(
      (res) => {
        console.log("Success");
        location.reload();
      }
    );
  }
}
