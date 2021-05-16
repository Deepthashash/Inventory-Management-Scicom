import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'node_modules/chart.js';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = []; 
  labels: string[] = [];
  quantities: number[] = [];
  lowStock: Product[] = [];

  constructor(
    private productService: ProductService,    
  ) { }


  ngOnInit(): void { 
    this.productService.getAllProducts().subscribe(
      (results) => {
        this.products = results;
        this.lowStock = results.filter(res => res.quantity < res.reOrderLevel);
        results.forEach(res => {
          this.labels.push(res.productName);
          this.quantities.push(res.quantity);
        });
        this.createPieChart(); 
      }
    )
  }

  createPieChart(){
    var pieChart = new Chart("pieChart", {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [{
          label: '# of Votes',
          data: this.quantities,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  update(id:number){
    console.log(id);
  }
}
